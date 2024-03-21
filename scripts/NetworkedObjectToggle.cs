using UnityEngine;
using Photon.Pun;

[RequireComponent(typeof(PhotonView))]
public class NetworkedObjectToggle : MonoBehaviourPunCallbacks
{
    public enum ToggleMode
    {
        invertToggle,
        setTrue,
        setFalse
    }

    public GameObject toChange;
    public ToggleMode toggleMode;
    public bool workWhenOffline = false;
    public string handTagName = "handTag";

    [Header("AllBufferedViaServer is reccomended so the object state doesn't desync. ")]
    public RpcTarget rpcTarget = RpcTarget.AllBufferedViaServer;

    [PunRPC]
    public void ButtonToggle()
    {
        switch(toggleMode)
        {
            case ToggleMode.invertToggle:
                toChange.SetActive(!toChange.activeSelf);
            break;
            case ToggleMode.setTrue:
                toChange.SetActive(true);
            break;
            case ToggleMode.setFalse:
                toChange.SetActive(false);
            break;

        }
    }

    private void OnTriggerEnter(Collider other)
    {
        if(!other.CompareTag(handTagName)) { return; }

        if (PhotonNetwork.InRoom) 
        {
            GetComponent<PhotonView>().RPC("ButtonToggle", rpcTarget);
        }
        else if(workWhenOffline)
        {
            ButtonToggle();
        }
    }
}
