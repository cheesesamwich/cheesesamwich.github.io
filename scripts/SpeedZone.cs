using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;

public class SpeedZone : MonoBehaviour
{
    GorillaLocomotion.Player player;
    public float playerSpeed = 1.2f;
    private float originalPlayerSpeed;

    void Start()
    {
        player = FindObjectOfType<GorillaLocomotion.Player>();
        originalPlayerSpeed = player.jumpMultiplier;
    }

    void OnTriggerEnter(Collider other)
    {
        if(!other.GetComponentInParent<GorillaLocomotion.Player>()) { return; }
        player.jumpMultiplier = playerSpeed;
    }

    void OnTriggerExit()
    {
        player.jumpMultiplier = originalPlayerSpeed;
    }
}
