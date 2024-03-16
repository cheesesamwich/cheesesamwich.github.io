using System.Collections.Generic;
using UnityEngine;

public class HitSounds : MonoBehaviour
{
    public List<SoundGroup> soundGroups;

    [System.Serializable]
    public class SoundGroup 
    {
        public List<AudioClip> sounds;
        public List<Material> materials;
    }

    public void SoundTriggered(GameObject hitter, GameObject hit) 
    {
        Material material = hit.GetComponent<MeshRenderer>().sharedMaterial;
        SoundGroup group = GetGroupForMaterial(material);

        if (group == null) return;
        AudioClip sound = group.sounds[Random.Range(0, group.sounds.Count)];
        hitter.GetComponent<AudioSource>().PlayOneShot(sound);
    }

    public SoundGroup GetGroupForMaterial(Material targetMaterial)
    {
        foreach (SoundGroup soundGroup in soundGroups)
        {
            if (soundGroup.materials.Contains(targetMaterial))
            {
                return soundGroup;
            }
        }
        return null;
    }
}
