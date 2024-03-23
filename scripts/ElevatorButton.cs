using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ElevatorButton : MonoBehaviour
{
    [Header("Config")]
    [SerializeField] private Animator animator;
    [SerializeField] private string triggerUpName = "MoveUp";
    [SerializeField] private string triggerDownName = "MoveDown";
    [SerializeField] private string handTag;
    [Header("Toggles")]
    [Tooltip("If your elevator is at the top on start, turn ON.")]
    [SerializeField] private bool isUp;
    private bool moving = false;

    private void OnTriggerEnter(Collider other)
    {
        if (!moving)
        {
            if (other.CompareTag(handTag))
            {
                moving = true;
                StartCoroutine(IsMoving());

                if (isUp)
                {
                    animator.SetTrigger(triggerDownName);
                }
                else
                {
                    animator.SetTrigger(triggerUpName);
                }
            }
        }
    }

    IEnumerator IsMoving()
    {
        yield return new WaitForSeconds(animator.GetCurrentAnimatorStateInfo(0).length);
        moving = false;
        Debug.Log("Done moving");
        if (isUp)
        {
            isUp = false;
        }
        else
        {
            isUp = true;
        }
    }
}
