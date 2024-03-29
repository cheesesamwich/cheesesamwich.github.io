export function getScripts()
{
  return(
    [
      { url: ["HitSounds.cs", "HitSoundTrigger.cs"], 
        name: "Hit Sounds", 
        id: "hitsounds",
        description: "Group materials and audio clips to create hit sounds",
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
          <h3>Example</h3>
          <img src='https://files.catbox.moe/at5wds.webp'></img>
        </>
      },
      { url: "SpeedZone.cs", 
        name: "Speed Zone", 
        id: "speed",
        description: "Make an object that changes the speed of the player when you walk into it",
        tutorial: 
        <>
          <p>- Import the downloaded script into your unity project.</p>
          <p><i>If you havent already, ensure you have a non movement colliding layer by making a new layer, and unchecking it in the "locomotion enabled layers" variable on the GorillaPlayer</i></p>
          <p>- Find the object you want to slow the player</p>
          <p>- Make sure the objects collider is set to "isTrigger"</p>
          <p>- Add the SpeedZone script to the object.</p>
          <p>- Set the "playerSpeed" variable on the script to the speed of the player when in the object. (1.2 is the gorillaPlayer default)</p>
        </>
      },
      { url: "NetworkedObjectToggle.cs", 
        name: "Networked Object Toggle", 
        id: "toggle",
        description: "Make a button that toggles an object for all players",
        tutorial: 
        <>
          <p>- Import the downloaded script into your unity project.</p>
          <p><i>Make sure your hand colliders are set up correctly. There will be a tutorial for this in the future, but for now you're on your own.</i></p>
          <p>- Put the NetworkedObjectToggle script on the object you want to act as the "button"</p>
          <p>- Set the "Toggle Mode" to whatever you want.</p>
          <p><i>"Invert toggle" inverts the objects state (off = on, on = off). "Set true" enables the object, and vice versa with "Set false".</i></p>
          <p>- Configure the "Hand Tag Name" variable to be the same as whatever your hand collider object is tagged as.</p>
          <p><i>"Work When Offline" Determines if the button will work even when not in a photon server</i></p>
          <p className="warning">Do not change the "Rpc Target" variable unless you know what you are doing. If you don't, it is best left as what it is.</p>
        </>
      },
      { url: "ElevatorButton.cs", 
        name: "Elevator", 
        id: "elevator",
        description: "Press a button to trigger a two way animation",
        tutorial: 
        <>
          <p>- Import the downloaded script into your unity project.</p>
          <p>- Add the script to the object that will act as your button.</p>
          <p><i>Make sure the button has a collider set to isTrigger!</i></p>
          <h3>Example</h3>
          <img src='https://files.catbox.moe/qu5zrh.png'></img>
          <p>- Create two different animations; One of the elevator going up, and another going down.</p>
          <p>- Drag the animator on your elevator object into the "animator" variable.</p>
          <p>- Set make both animations transition from "Any State."</p>
          <p><i>Make sure loop time is FALSE, and in debug mode make wrap mode "Clamp Forever" on BOTH animations!!!!</i></p>
          <p>- Make a new animation state and set it to the default state.</p>
          <h3>Example</h3>
          <img src='https://files.catbox.moe/qxr6tj.png'></img>
          <p>- Create two trigger states, one for up, and one for down.</p>
          <p>- Set the transitions to use the corresponding triggers.</p>
          <h3>Example</h3>
          <img src='https://files.catbox.moe/iedkh7.png'></img>
          <p><i>Make sure the trigger names match with the trigger name values in the script!!</i></p>
          <p>- Set the handTag value to either your hand collision tag OR your finger collision tag.</p>
          <p>- If the elevator starts at the top, set the "IsUp" bool to true.</p>
        </>
      }
    ]
  )
}

export function getTuts()
{
  return(
    [
      { name: "Reflection Probes", 
        id: "reflection",
        description: "How to create and use reflection probes",
        tutorial: 
        <>
          <h1>General info:</h1>
          <p className='warning'>This tutorial assumes you are using URP in your project.</p>
          <p>Reflection probes sample the area around it and create a reflection cubemap, then apply the reflections to smooth objects without the performance cost of real reflections. A max of two probes can affect a single object at once.</p>
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
          <p><i>Can't see the probe? Make sure gizmos are ON, and reflection probes aren't off in the menu.</i></p>
          <h1>Settings:</h1>
          <p>- SIZE & PROBE ORIGIN are the two buttons at the top. Size allows you to edit the size of the bounding box in the scene, and the other moves the probe in the box, rather than making an offset.</p>
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
      { name: "Light Probes", 
        id: "lightprobe",
        description: "How to create and use light probes",
        tutorial: 
        <>
          <h1>General info:</h1>
          <p className='warning'>This tutorial assumes you are using URP in your project.</p>
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
      { name: "URP", 
        id: "urp",
        description: "How to get and use the Universal Render Pipeline",
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
    },
    { name: "Audio Reverb Zone", 
      id: "reverb",
      description: "How to create and use audio reverb zones",
      tutorial: 
      <>
        <h1>General info:</h1>
        <p>Audio reverb zones allow for audio to be edited to reverberate in a certain area.</p>
        <h1>Creation:</h1>
        <p>- To create a new audio reverb zone, right click in the hierarchy, go to audio, then audio reverb zone.</p>
        <h3>Example of menu</h3>
        <img src='https://files.catbox.moe/d70j90.png'></img>
        <p>- Once created, you should see two wireframe circles. These are the minimum and maximum distance ranges.</p>
        <p><i>Don't see anything? Make sure gizmos are enabled, and that audio reverb zones are enabled in the menu.</i></p>
        <p>- Adjust the min range to fill your whole room, and the max to be a medium size circle in the center of the room.</p>
        <h3>Example of a well placed audio reverb zone</h3>
        <img src='https://files.catbox.moe/td6kp0.png'></img>
        <p>- Once your zone is scaled to the right size, you're pretty much done!</p>
        <p>- Select a reverb profile in the object properties. All of them have pretty self-explanitory names.</p>
        <h1>Settings:</h1>
        <p>- MINDISTANCE chooses how close someone must be to have audio affected by the zone.</p>
        <p>- MAXDISTANCE chooses how close someone must be to have audio fully edited.</p>
        <p>- REVERBPRESET is a list of pre-made reverb profiles for you to easily use.</p>
      </>
    },
    { name: "Lighting Settings", 
      id: "lighting",
      description: "How to create and set up lighting settings",
      tutorial: 
      <>
        <h1>General info:</h1>
        <p className='warning'>This tutorial assumes you are using URP in your project.</p>
        <p>Audio reverb zones allow for audio to be edited to reverberate in a certain area.</p>
        <h1>Creation:</h1>
        <p>- To create new lighting settings, right click in the asset menu, go to create, then lighting settings.</p>
        <h3>Example of menu</h3>
        <img src='https://files.catbox.moe/icotjv.png'></img>
        <p>- To use the settings, go to window, rendering, then lighting.</p>
        <h3>Example of menu</h3>
        <img src='https://files.catbox.moe/8ym6yk.png'></img>
        <p>- That should open a menu where you can input lighting settings and edit them, as well as bake lighting.</p>
        <p>- From here, just drag your new lighting settings into the box at the top of the menu.</p>
        <h3>Example of menu</h3>
        <img src='https://files.catbox.moe/731g06.png'></img>
        <h1>Settings:</h1>
        <p><i>Each setting will have a short description, then a recommended value shortly after.</i></p>
        <p><i>For reference, this is the lighting I use.</i></p>
        <img src='https://files.catbox.moe/7i52bq.png'></img>
        <p>- REALTIME SETTINGS are all, shockingly, related to realtime lighting. For VR purposes, you should generally avoid having too many realtime lights. In any case, all of these should be OFF.</p>
        <p>- BAKED GLOBAL ILLUMINATION makes the engine take everything into account when baking. Makes the game look much better, at the cost of increased bake times. ON.</p>
        <p>- LIGHTING MODE defines how the engine will bake shadows, and sometimes overall lighting. Shadowmask works for most cases.</p>
        <p>- LIGHTMAPPER defines what the engine will use to bake the lights. Set to CPU by default, but not recommended.</p>
        <p>- PROGRESSIVE UPDATES allows you to watch the baking in real time via baking whats directly in front of your screen before everything else. Really pointless, majorly increases bake times. OFF.</p>
        <p>- IMPORTANCE SAMPLING decides if the engine will sample every lights 'Importance' setting. ON.</p>
        <p>- DIRECT SAMPLES is the number of samples the lightmapper will use to calculate direct lighting. 64-256 depending on how long you're willing to wait.</p>
        <p>- INDIRECT SAMPLES is the number of samples the lightmapper will use to calculate indirect lighting. 512.</p>
        <p>- ENVIRONMENT SAMPLES is the number of samples the lightmapper will use to calculate environment lighting. 256.</p>
        <p>- LIGHT PROBE SAMPLE MULTIPLIER is the number the lightmapper will multiply the sample count by for light probe calculations. 2-3.</p>
        <p><i>Higher values will take longer to bake, but give higher quality probe lighting.</i></p>
        <p>- MAX BOUNCES is the max number of bounces used to calculate indirect lighting. Should never need to be higher than 2.</p>
        <p>- FILTERING decides what algorithm the lightmapper will use for denoising. Auto.</p>
        <p>- LIGHTMAP RESOLUTION is the resolution (in textels) of the bake per object. 20-40, depending on how long you're willing to wait.</p>
        <p><i>Higher values will take longer to bake, but give higher quality lighting.</i></p>
        <p>- LIGHTMAP PADDING is the number of textels that each object will be separated from eachother to avoid light bleeding. 1-2.</p>
        <p>- MAX LIGHTMAP SIZE is how large (in pixels) each lightmap can be. 256x256 for testing, 1024/2048 for build.</p>
        <p><i>Higher values will take longer to bake, and have larger file sizes, but give higher quality lighting.</i></p>
        <p>- LIGHTMAP COMPRESSION defines how much the lightmapper will compress lighting once finished. LOW would make the file size much smaller, but might leave artifacts. HIGH.</p>
        <p>- AMBIENT OCCLUSION defines if ambient occlusion will be used when baking. ON.</p>
        <p>- MAX DISTANCE decides how long the max ray distance will be while baking. 1-2.</p>
        <p>- INDIRECT AND DIRECT CONTRIBUTION define how much those two lighting types are taken into account during calculations. Should always be 0-1</p>
        <p>- DIRECTIONAL MODE affects how directional lights are treated. Meta requires this to be non-directional.</p>
        <p>- ALBEDO BOOST defines how much color will affect bouncing light while baking. 1.</p>
        <p>- INDIRECT INTENSITY controls the brightness of baked indirect light. 1. </p>
        <p>- LIGHTMAP PARAMETERS are the overall quality settings of your lighting. Can really be anything, but Default-Medium works best (in my opinion).</p>
      </>
    }
    ]
  )
}