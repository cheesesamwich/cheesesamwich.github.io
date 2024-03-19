export function getScripts()
{
  return(
    [
      { url: ["https://raw.githubusercontent.com/cheesesamwich/cheesesamwich.github.io/main/scripts/HitSounds.cs", "https://raw.githubusercontent.com/cheesesamwich/cheesesamwich.github.io/main/scripts/HitSoundTrigger.cs"], 
        name: "HitSounds", 
        description: "Allows you to group materials and audio clips to create hit sounds",
        tutorial: 
        <>
          <p>- Import both downloaded scripts into your unity project.</p>
          <p>- Add the HitSoundTrigger script to your hand collider.</p>
          <p>- Add an audio source to your hands</p>
          <p><i>You can increase the "Spatial Blend" property for higher realism.</i></p>
          <p>- Add the HitSounds script to your gorilla rig. Here is where you can associate materials with the sound they should make when hit.</p>
          <p>- Press the plus in the "Sound Groups" list to create a new sound group.</p>
          <p>- Drag in the materials you want to associate into the "Materials" List</p>
          <p>- Drag all audio clips into the "Sounds" list.</p>
          <p><i>The script supports random audio, so you can upload as many audio clips as you want for variation.</i></p>
          <p>You're good to go!</p>
          <h3>Example</h3>
          <img src='https://files.catbox.moe/at5wds.webp'></img>
        </>
      },
      { url: "https://raw.githubusercontent.com/cheesesamwich/cheesesamwich.github.io/main/scripts/SpeedZone.cs", 
        name: "SpeedZone", 
        description: "Allows you to make an object that changes the speed of the player when you walk into it",
        tutorial: 
        <>
          <p>- Import the downloaded script into your unity project.</p>
          <p><i>If you havent already, ensure you have a non movement colliding layer by making a new layer, and unchecking it in the "locomotion enabled layers" variable on the GorillaPlayer</i></p>
          <p>- Find the object you want to slow the player</p>
          <p>- Make sure the objects collider is set to "isTrigger"</p>
          <p>- Add the SpeedZone script to the object.</p>
          <p>- Set the "playerSpeed" variable on the script to the speed of the player when in the object. (1.2 is the gorillaPlayer default)</p>
          <p>You're good to go!</p>
        </>
      }
    ]
  )
}

export function getTuts()
{
  return(
    [
      { url: ["https://raw.githubusercontent.com/cheesesamwich/cheesesamwich.github.io/main/scripts/HitSounds.cs", "https://raw.githubusercontent.com/cheesesamwich/cheesesamwich.github.io/main/scripts/HitSoundTrigger.cs"], 
        name: "Reflection Probes", 
        description: "Shows how to create and use reflection probes",
        tutorial: 
        <>
          <h1>General info:</h1>
          <p>Reflection probes sample the area around it and create a reflection cubemap, then apply the reflections to smooth objects without the performance cost of real reflections.</p>
          <h1>Creation:</h1>
          <p>- To create a probe, right click in the hierarchy, go to light, then reflection probe.</p>
          <h3>Example of menu</h3>
          <img src='https://files.catbox.moe/rmnqxp.png'></img>
          <p>- Reflection probes have a cube area that the reflections will affect. If the cube is as big as a room, the reflections will only show on objects in the room.</p>
          <h3>Example of bounding box</h3>
          <img src='https://files.catbox.moe/kwirmq.png'></img>
          <p>- Once your probe is set up, you can either manually bake it by pressing bake, or have it bake automatically the next time you bake lights.</p>
          <p>- When the probe is baked, it will show the finished reflections when selected.</p>
          <h3>Example example of baked probe</h3>
          <img src='https://files.catbox.moe/pedn5q.png'></img>
          <p>- Any smooth/metallic object inside of the area will have the reflections applied.</p>
          <h1>Settings:</h1>
          <p>- TYPE is how the reflections will be made. Realtime makes the probe create reflections every frame update. Baked allows you to have the probe create a reflection using your computer's hardware.</p>
          <p className='warning'>NEVER use realtime with any standalone VR game. Baked reflections should never impact performance.</p>
          <p>- IMPORTANCE is how the game will choose which probe to use over others.</p>
          <p><i>For example, the game would use a probe with the priority of 2 over one with the priority of 1.</i></p>
          <p>- INTENSITY is how much the probe will show on smooth/metallic objects.</p>
          <p>- BOX PROJECTION just changes the way the reflections show up on objects. Typically this should be on.</p>
          <p>- BLEND DISTANCE is the distance (in meters) that the reflection will fade into view on objects.</p>
          <p><i>For example, a blend distance of 0 would make the reflections appear instantly upon entering the area.</i></p>
          <p>- BOX SIZE defines how large the area of effect is.</p>
          <p>- RESOLUTION is how high quality the reflections will be. Typically you'll want this to be very low.</p>
          <p><i>Due to how reflections are rendered, high quality reflections will use more power, but wont look much different. 128x128 is the best option for most occasions.</i></p>
          <p>- HDR decides if the reflections will be rendered in a higher color range.</p>
          <p><i>Using HDR really depends on your project. If you're going for more realistic graphics, you'll want this on. However, it can cause some very minor performance impacts.</i></p>
          <p>- SHADOW DISTANCE defines how far away shadows will be rendered. This doesn't affect performance unless you're using realtime rendering.</p>
          <p><i>This shouldn't be set to anything higher than 100, as it will majorly increase bake and/or render times.</i></p>
          <p>- CLEAR FLAGS is what will be rendered as the "background" of sorts.</p>
          <p>- BACKGROUND COLOR is only used if clear flags is set to "Solid Color."</p>
          <p>- CULLING MASK defines what will be rendered in the reflection. All included layers are rendered, while the others are not.</p>
          <p>- OCCLUSION CULLING decides if the reflections will take occlusion into account.</p>
          <p><i>This setting only really matters if you're using realtime probes.</i></p>
          <p>- CLIPPING PLANES define how far/close an object must be before being cut out of the render.</p>
          <p><i>For example, if you have a building 1000 meters away, and the FAR clipping plane is set to 100, the building won't be rendered.</i></p>
        </>
      },
      { url: ["https://raw.githubusercontent.com/cheesesamwich/cheesesamwich.github.io/main/scripts/HitSounds.cs", "https://raw.githubusercontent.com/cheesesamwich/cheesesamwich.github.io/main/scripts/HitSoundTrigger.cs"], 
        name: "Light Probes", 
        description: "Shows you how to create and use light probes",
        tutorial: 
        <>
          <h1>General info:</h1>
          <p>Light probes sample lighting data from baked lights, then apply the data to non-static objects without the performance cost of realtime lighting.</p>
          <h1>Creation:</h1>
          <p>- To create a probe group, right click in the hierarchy, go to light, then light probe group.</p>
          <h3>Example of menu</h3>
          <img src='https://files.catbox.moe/uwwrk9.png'></img>
          <p>- Light probe groups are made up of points. Each point is a spot where the lighting will be sampled to be used on non-static objects.</p>
          <h3>Example of probe group</h3>
          <img src='https://files.catbox.moe/qhwn4z.png'></img>
          <p>- In order to set up light probe groups, click the "Edit Light Probe Locations" button while the object is selected.</p>
          <p>- Drag and duplicate probes around until you fill the room.</p>
          <p><i>The more probes, the more detail, but at the cost of bake times.</i></p>
          <p className='warning'>Avoid putting probes in walls or outside of enclosed rooms. Outside probes will bake as straight black.</p>
          <h3>Example of good probe placement</h3>
          <img src='https://files.catbox.moe/wa342n.png'></img>
          <p>- Once your probes are set up, the lighting data will be sampled the next time you bake.</p>
          <p className='warning'>Lights must be set to baked to be sampled by probes.</p>
          <h1>Settings:</h1>
          <p>- SHOW WIREFRAME, when enabled, shows how each probe connects.</p>
          <p>- REMOVE RINGING affects objects under intense lighting. Reduces artifacting when on, at the loss of some contrast.</p>
        </>
      },
      { url: ["https://raw.githubusercontent.com/cheesesamwich/cheesesamwich.github.io/main/scripts/HitSounds.cs", "https://raw.githubusercontent.com/cheesesamwich/cheesesamwich.github.io/main/scripts/HitSoundTrigger.cs"], 
      name: "URP", 
      description: "Shows you how to get and use the Universal Render Pipeline",
      tutorial: 
      <>
        <h1>General info:</h1>
        <p>URP is a render pipeline optimized for mobile/VR. It allows for better overall performance, while also looking better.</p>
        <h1>Obtaining:</h1>
        <p>- To add URP to your project, open Window/Package Manager and import "Universal RP."</p>
        <h3>Example of menu</h3>
        <img src='https://files.catbox.moe/b4m1aj.png'></img>
        <p>- Once added, you might need to change your renderer in the graphics settings.</p>
        <p>- Right click in your assets menu, and create a new "URP Asset"</p>
        <p><i>A second file should be created automatically when you create the first.</i></p>
        <h3>Example of menu </h3>
        <img src='https://files.catbox.moe/tgbvh6.png'></img>
        <p>- Head to your project settings, then to graphics. Change out your current (or blank) render pipeline asset with the one you just created.</p>
        <h3>Example of settings </h3>
        <img src='https://files.catbox.moe/c70lqs.png'></img>
        <p>- Once the pipeline is changed, Unity might need to restart. After that, every material should be solid pink.</p>
        <p className='warning'>Don't panic! This is just part of the process.</p>
        <h3>Example of pink (broken) materials</h3>
        <img src='https://files.catbox.moe/osrfdq.png'></img>
        <p>- To fix all of your materials, head to the assets tab again, and to the left side select "All Materials"</p>
        <h3>Example of menu</h3>
        <img src='https://files.catbox.moe/vmhn62.png'></img>
        <p>- Select every material made by you, then go to Edit/Rendering/Materials/Convert Selected Built-in Materials to URP.</p>
        <h3>Example of menu</h3>
        <img src='https://files.catbox.moe/erqtl4.png'></img>
        <h1>Render Settings:</h1>
        <p className='warning'>By default, URP will lag on most VR devices. This is due to the render settings.</p>
        <p>Rather than explaining every setting, I'll go over each important one briefly and say whether or not it should be enabled, and what value it should be. If you want more info, I highly recommend watching Fist Full Of Shimp's 7 video playlist on URP optimization.</p>
        <p>- For reference, these are great settings for most VR devices.</p>
        <img src='https://files.catbox.moe/0palaz.png'></img>
        <p className='warning'>These may not be suitable for the Quest 1 or any device worse than it.</p>
        <p>- Depth texture enables depth testing in shaders. ON.</p>
        <p>- Opaque texture enables opaques in shaders. ON.</p>
        <p>- HDR allows colors to have a higher color range, at a very slight performance cost. ON.</p>
        <p>- Anti aliasing removes artifacting around the edges of objects, making the viewing experience less harsh. ON, 2x.</p>
        <p className='warning'>High values can cause performance issues.</p>
        <p>- Render scale decides how large the game will be rendered at. Lowering this value drastically increases performance, but looks HORRIBLE. 1.</p>
        <p className='warning'>Higher values than 1 will cause performance issues.</p>
        <p>- Main light chooses how the "sun" of your game will be rendered. Per pixel.</p>
        <p>- Cast shadows chooses if shadows will be rendered. ON.</p>
        <p>- Shadow resolutio defines the quality of the shadows. 1024x1024.</p>
        <p className='warning'>High values can cause performance issues.</p>
        <p>- Additional lights decides how every light OTHER THAN the sun will be rendered. Per pixel.</p>
        <p>- Reflection probes - Probe blending. ON. Box projection. ON.</p>
        <p>- Max distance defines how far away shadows will be rendered. 50-100.</p>
        <p className='warning'>Higher values can cause performance issues.</p>
        <p>- Soft shadows determines if lights can have soft shadows. ON.</p>
        <p className='warning'>Soft shadows on realtime lights can cause lag</p>
        <p>- Quality (of the soft shadows) determines how high quality the soft shadows are rendered. Low-Medium.</p>
        <p className='warning'>High quality soft shadows can cause lag</p>
      </>
    }
    ]
  )
}