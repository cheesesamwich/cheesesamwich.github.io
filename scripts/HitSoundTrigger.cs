using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HitSoundTrigger : MonoBehaviour
{
    HitSounds hitsounds;
    
    void Awake()
    {
        hitsounds = FindObjectOfType<HitSounds>();
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.GetComponent<MeshRenderer>() != null) 
        {
            hitsounds.SoundTriggered(gameObject, other.gameObject);
        }
    }
}
