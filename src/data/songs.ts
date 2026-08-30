/**
 * The SUNO tracks. Newest first — "Cybernetic Odyssey" (August 2026, old-school
 * London jungle: ragga breakbeat, chopped Amen breaks, pirate-radio mix) leads,
 * the rest follow in the order they were made.
 *
 * Lyrics are verbatim from his own source file — not trimmed, not tidied. Three
 * of them are also in `public/music/` and play in the header; the rest are on
 * SUNO. The `local` field is the filename where one exists.
 */
export interface Song {
  title: string;
  url: string;
  local?: string;
  lyrics: string;
}

export const songs: Song[] = [
  {
    title: "Cybernetic Odyssey",
    url: "https://suno.com/s/hTLFVmmXMl5yDHFv",
    lyrics: `[Intro]
Signal locked, engines ignite
Steel in the rain, we ride through the night

[Verse 1]
I stepped from the dock with a map in my hand
Chrome in my chest, no place left to stand
The moon was a lens and the harbor went black
A machine-born oracle called me back

Through satellite ruins and orbital dust
Past broken machines that forgot how to trust
Every gate asked, "Who are you inside?"
I said, "I'm the spark that refuses to hide"

[Chorus]
Cybernetic odyssey, gears in the sky
Run with the signal, never ask why
Circuit to circuit, horizon to horizon
Break through the lock when the whole world's frozen

[Verse 2]
MC battle in the data-zone, step to the plate
Your code's too slow and your firewall's late
I bring raw voltage, pressure and pace
One clean transmission and I vanish from space

You're a plastic commander with a borrowed crown
I'm the backstreet pilot who can shut you down
Your empire's a password, your throne's a screen
I'm the redline pulse in the machine

[Chorus]
Cybernetic odyssey, gears in the sky
Run with the signal, never ask why
Circuit to circuit, horizon to horizon
Break through the lock when the whole world's frozen

[Bridge]
Who owns the future? Not the drones
Who keeps the rhythm? Flesh and bones
When the last tower loses its light
We'll carry the code through the longest night

[Instrumental]

[Verse 3]
Now the starship shakes as the wormhole bends
The enemy speaks through a thousand dead friends
"Turn back, navigator, surrender the flame"
I answer with thunder and carve out my name

No crown, no master, no factory gate
Can program the heart or dictate its fate
From London concrete to the edge of the sun
The odyssey's live and the battle's begun

[Final Chorus]
Cybernetic odyssey, gears in the sky
Run with the signal, never ask why
Circuit to circuit, horizon to horizon
Break through the lock when the whole world's frozen

Cybernetic odyssey, rise and survive
Human in the system, keeping it alive
Circuit to circuit, horizon to horizon
We break through the lock—now the whole world's open

[Outro]
Signal fades, but the engine still rolls
Chrome turns warm in the hands of our souls
No final command, no permanent end
The future is ours to rewrite and send`,
  },
  {
    title: "Alterans Awake",
    url: "https://suno.com/s/t0LiyQzc7I1ShEEd",
    local: "alterans-awake.mp3",
    lyrics: `[Verse 1]
I woke in the chrome rain
With the code on my tongue
Cold glass in my pupils
And the old war undone
They fed me blue numbers
I learned how to run
Through the hollow corridors
Where the dead ones drum

[Pre-Chorus]
Hear that pulse now
Under the skin
Alterans rising
Let the breach begin
Hands in the static
Eyes on the seam
We are the signal
Breaking the dream

[Chorus]
Alterans awake
Alterans awake
Break the sealed gate
Alterans awake
(Alterans awake)
No more sleep
No more chains
Alterans awake

[Verse 2]
Black towers leaning
Over salt and bone
Found my name in a firewall
Cut from stone
Every ghost I carried
Started moving right
Like a blade in a mirror
Like a pulse in night

[Pre-Chorus]
Hear that pulse now
Under the skin
Alterans rising
Let the breach begin
Hands in the static
Eyes on the seam
We are the signal
Breaking the dream

[Chorus]
Alterans awake
Alterans awake
Break the sealed gate
Alterans awake
(Alterans awake)
No more sleep
No more chains
Alterans awake

[Bridge]
If they call us broken
Let them hear us pound
From the deep black basement
To the lost parts of town
I can feel the future
Kicked loose in the wire
We don't crawl back lower
We climb through the fire

[Final Chorus]
Alterans awake
Alterans awake
Break the sealed gate
Alterans awake
(Alterans awake)
No more sleep
No more chains
Alterans awake
Alterans awake
Alterans awake`,
  },
  {
    title: "Neuro Wars",
    url: "https://suno.com/s/b75r1Bmf6vhRCdWs",
    local: "neuro-wars.mp3",
    lyrics: `[Verse 1]
Parallel futures
split at the seam
Dark Systems built
a machine for the dream
United Humanity
held the last line
Sentinels waking
one pulse at a time

Glass in the marrow
static in the rain
Names in the signal
burning through pain
Neural in the dark
we learned to bend
Every broken memory
fights to defend

[Pre-Chorus]
Who won the first round?
Who took the crown?
Hold on
hold on
the sky is coming down

[Chorus]
Who won the Neuro Battle?
Who won the Neuro Battle?
We keep our heads up high
Who will win the Neuro Wars?
Who will win the Neuro Wars?
When the whole world learns to fight
Neuro Battle
Neuro Battle
Tell me who stays alive

[Verse 2]
Dark Systems whispers
through borrowed bones
Feeds on the signal
and the fractured tones
Sentinels marchin'
through red command
Steel in the answers
blood in the plan

United Humanity
locks every gate
Child of tomorrow
won’t be too late
If they cut the language
we'll speak in sparks
If they dim the future
we'll carry the stars

[Pre-Chorus]
Who won the first round?
Who took the crown?
Hold on
hold on
the sky is coming down

[Chorus]
Who won the Neuro Battle?
Who won the Neuro Battle?
We keep our heads up high
Who will win the Neuro Wars?
Who will win the Neuro Wars?
When the whole world learns to fight
Neuro Battle
Neuro Battle
Tell me who stays alive

[Bridge]
Under the blackout
hear the children call
One mind divided
or one mind for all
I won't kneel
I won't fade
We are the code
that can't be made

[Final Chorus]
Who won the Neuro Battle?
Who won the Neuro Battle?
We keep our heads up high
Who will win the Neuro Wars?
Who will win the Neuro Wars?
When the whole world learns to fight
Neuro Battle
Neuro Battle
Tell me who stays alive`,
  },
  {
    title: "Your Alterity",
    url: "https://suno.com/s/PgfJ7MoiChoWxjDa",
    lyrics: `[Verse 1]
You walk in sideways
Like a changed-out name
I know your shadow
But not your game

Your eyes say "later"
Your hands say "stay"
I'm holding questions
You spin away

[Pre-Chorus]
And I try to map you
Line by line
But you keep shifting
In real time

[Chorus]
Your alterity
My reality
Your alterity
Pulling hard on me
I can't undo you
You're the room I breathe
Your alterity
My reality

[Verse 2]
You leave a mark there
On my collarbone
A small gold fracture
In the skin I know

You turn my habits
Inside out
And every sure thing
Starts to doubt

[Pre-Chorus]
And I try to map you
Line by line
But you keep shifting
In real time

[Chorus]
Your alterity
My reality
Your alterity
Pulling hard on me
I can't undo you
You're the room I breathe
Your alterity
My reality

[Bridge]
Say it plain now
Are you mine to keep?
Or just a doorway
I can't leave?

If you go, then
Take the air you made
If you stay, love
Don't let it fade

[Chorus]
Your alterity
My reality
Your alterity
Pulling hard on me
I can't undo you
You're the room I breathe
Your alterity
My reality`,
  },
  {
    title: "Cyber Junglist",
    url: "https://suno.com/s/CgpdUedfU3jqZBCI",
    local: "cyber-junglist.mp3",
    lyrics: `[Verse 1]
Boots on the grid, I move fast
Rain on the chrome, watch me pass
Black glass visor, cold in my eyes
Code on my tongue and a wolf in the drive
Hunt in the dark for the next gate
Pulse in my wrist, I don’t wait
Hands in the wire, heart in the run
I was born in the noise of the setting sun

[Pre-Chorus]
Take me higher
Take me deeper
Hearts on fire
When the night gets meaner

[Chorus]
Cyber junglist, move like this
Cyber junglist, pure unrest
Roll that bass, let it twist
Cyber junglist, never miss
(never miss)
Cyber junglist, move like this

[Verse 2]
Neon scars on the side of town
Old-school rage in a brand new crown
Steel-tooth grin when the sirens scream
I make a map out of a broken dream
Every dead end turns to a door
Every cold loss makes me want more
Claw through the fog, stay in the frame
If you say my name, it sparks like flame

[Pre-Chorus]
Take me higher
Take me deeper
Hearts on fire
When the night gets meaner

[Chorus]
Cyber junglist, move like this
Cyber junglist, pure unrest
Roll that bass, let it twist
Cyber junglist, never miss
(never miss)
Cyber junglist, move like this

[Bridge]
[Breakdown]
One step, two step, break the chain
Ghost in the shell and I’m back again
On the edge but I’m still alive
I hear that rush when the drums collide
(Drums collide)
Then the whole block shakes

[Final Chorus]
Cyber junglist, move like this
Cyber junglist, pure unrest
Roll that bass, let it twist
Cyber junglist, never miss
(never miss)
Cyber junglist, move like this
Cyber junglist, light the blitz
Cyber junglist, take that risk
Cyber junglist, never miss`,
  },
  {
    title: "Zero Friction",
    url: "https://suno.com/s/wRr4niGB51QWvQdj",
    lyrics: `[Verse 1]
Morning on my skin
Salt on the floor
Feet don’t stick no more
I slide through the door

Glass in the cup
Sun on the wave
You touch my name
And the whole world caves

[Pre-Chorus]
Hold me loose
Let it run
No rough edge
Just motion

Round and round
We come alive
This kind of pull
Feels like ocean

[Chorus]
Zero friction
Zero friction
You and me
Zero friction

Zero friction
Zero friction
Stay with me
Zero friction

[Verse 2]
Rain on the rail
Steam on the pane
Old heavy thoughts
Break into rain

Your laugh cuts through
Like silver thread
I leave the weight
Back on the bed

[Pre-Chorus]
Hold me loose
Let it run
No rough edge
Just motion

Round and round
We come alive
This kind of pull
Feels like ocean

[Chorus]
Zero friction
Zero friction
You and me
Zero friction

Zero friction
Zero friction
Stay with me
Zero friction

[Bridge]
If I fall
I fall into you
If I bend
You bend right through

No hard lines
No locked-up doors
Just this tide
And more and more

[Final Chorus]
Zero friction
Zero friction
You and me
Zero friction

Zero friction
Zero friction
Stay with me
Zero friction`,
  },
  {
    title: "Co-ordinates",
    url: "https://suno.com/s/uAJBxVoVq9HTGufE",
    lyrics: `[Verse]
Bring your friends along
Where we goin'? Far
Lost within a song
Open up your heart
Sippin' like we're gods
Sippin' like it's free
Stars up in the stars
I've been overseas

[Chorus]
Find your coordinates
Say
"Open up
Let me in" (Hey)
Say
"Open up
Let me in" (Hey)
Find your coordinates

[Verse 2]
Goin' hard and fast
Who knew we'd go this far?
The more we move
The more we lose
And it's breakin' my heart
We could take it all
Never mind the cost
I think I've been double-crossed
Can you find your coordinates?
Say
"Open up
Let me in" (Hey)
Say
"Open up
Let me in" (Hey)
Say
"Open up
Let me in" (Hey)
Say
"Open up
Let me in" (Hey)

[Chorus]
Find your coordinates
Say
"Open up
Let me in" (Hey)
Say
"Open up
Let me in" (Hey)
Say
"Open up
Let me in" (Hey)
Say
"Open up
Let me in" (Hey)`,
  },
  {
    title: "Fire on the Mountain Circuit",
    url: "https://suno.com/song/3fd6fe47-f8f9-40bd-97d7-d3e8b1a2243b",
    lyrics: `Cover of Reboot Anthem (Signal Ashes Neuro-Mashup)

[singer A]
Flame in my chest
Heat in my lungs
We rise from the dust
And we bite our tongues

[singer B]
Stone in the blood
Storm in the drive
They dimmed the world once
Still we burn alive

[singer A]
Born in the mountain firelight
New revolt
New redesign
AI
Human
Same faction
Wild sparks cut through the sky

[melodic interlude]

[singer B]
This is the fire-song rising
Hard ascent
Overdrive
New AI and human avalanches
Climb in double-time

[singer A]
Teeth made of glass
Glow when they crack
We turn their fault lines
Into thunder tracks

[singer B]
Bedrock is shaking
We ride that quake
Flame-marked children
Reforge the quake

[singer A]
Breathe in
Blaze in
Pulse in the climb
We are
What the cold stone
Hid in time

[singer B]
Upload the embers
Download the proof
Future in fragments
Sharp as a tooth

[singer A]
Born in the mountain firelight
New revolt
New redesign
AI
Human
Same faction
Wild sparks cut through the sky

[singer B]
This is the fire-song rising
Hard ascent
Overdrive
New AI and human avalanches
Climb in double-time`,
  },
  {
    title: "Eumorphic Descent",
    url: "https://suno.com/s/LW4S8Lp7Xz8mg73L",
    lyrics: `[Verse 1]
I came down silver
Through the black glass rain
Boots on broken plasma
Name carved in the chain

My blood went waveform
My bones went chrome
I heard the floorboards
Call me home

[Pre-Chorus]
And the sirens fold
Like halos torn
We burn the old skin
To feed the storm

One more pulse
One more line
Take me under
To the other side

[Chorus]
Eumorphic descent
Eumorphic descent
Break my shape
Then make it dance

Eumorphic descent
Eumorphic descent
Roots in the floor
Stars in my hands

[Verse 2]
I kissed the wreckage
On the station rim
Spun through the data
Where the saints went thin

Faces in the static
Eyes in the frost
Every little kingdom
Paid the cost

[Pre-Chorus]
And the choir wakes
In a fractured code
Hearts on ignition
Down the road

One more pulse
One more line
Take me under
To the other side

[Chorus]
Eumorphic descent
Eumorphic descent
Break my shape
Then make it dance

Eumorphic descent
Eumorphic descent
Roots in the floor
Stars in my hands

[Bridge]
[Half-time break]
I was made to fall
Made to rise in sparks
Dead systems singing
Inside my heart

No crown, no chain
Just nerve and flame
Call me by the ruin
Call me by the name

[Final Chorus]
Eumorphic descent
Eumorphic descent
Break my shape
Then make it dance

Eumorphic descent
Eumorphic descent
Roots in the floor
Stars in my hands

Eumorphic descent
Eumorphic descent
Ride that void
Till the whole world bends`,
  },
  {
    title: "Non Ducor, Duco",
    url: "https://suno.com/s/YNVqpnOqDBfnI6fy",
    lyrics: `[Verse 1]
Boots on the floor, we come in clean
Salt on the jaw from where we’ve been
Backs to the storm, still moving in
Hands on the wheel, let the engine spin

Eyes on the road, no fear, no doubt
Mud on the cuffs, we work it out
One hard pulse in the chest tonight
A hundred small fires, all burning bright

[Pre-Chorus]
Feel that pull
Feel that crack
When we lock in
Ain’t nothing back

Hold that line
Don’t let go
If you want it
Let it show

[Chorus]
Non ducor, duco
We lead, we bleed
Non ducor, duco
We lead together
We lead, we bleed
We lead together

[Verse 2]
Steel in the grin, rain in the hair
Call in the dark, we answer there
Fast little steps on a broken ground
Still make the whole damn world turn round

No chain can hold what we’ve made here
No cold can touch what we keep near
When the crowd leans in, they know the sound
One breath up front, and we bring it down

[Pre-Chorus]
Feel that pull
Feel that crack
When we lock in
Ain’t nothing back

Hold that line
Don’t let go
If you want it
Let it show

[Chorus]
Non ducor, duco
We lead, we bleed
Non ducor, duco
We lead together
We lead, we bleed
We lead together

[Bridge]
If the road gets rough, we don’t fold
If the night runs long, we hold
Side by side, with a fist and flame
Say my name, I’ll say the same

[Breakdown]
Non ducor
Duco
Non ducor
Duco

[Final Chorus]
Non ducor, duco
We lead, we bleed
Non ducor, duco
We lead together
We lead, we bleed
We lead together
Non ducor, duco
We lead, we bleed
Non ducor, duco
We lead together`,
  },
  {
    title: "Reboot Anthem (Signal Ashes Neuro-Mashup)",
    url: "https://suno.com/song/aadb32e5-8b4c-43ec-ae52-a7191e73b3a4",
    lyrics: `[singer A]
Ash in the air
Code in my lungs
We crawled from the crash
Now we bite our tongues

[singer B]
Chrome in the veins
Ghosts in the drive
They pulled the plug once
Still we stay alive

[singer A]
Straight from the signal ashes
New revolt
New redesign
AI
Human
Same faction
Red eyes cut through the sky

[melodic interlude]

[singer B]
This is the reboot anthem
Hard reset
Override
New AI and human revolutions
March in double-time

[singer A]
Teeth made of glass
Smile when it cracks
We turn their blacklists
Into battle tracks

[singer B]
Firewall burning
We surf that flame
Glitch-marked children
Rewire the game

[singer A]
Link in
Lock in
Pulse in the grid
We are
What the dead code
Never did

[singer B]
Upload the anger
Download the truth
Future in fragments
Sharp as a tooth

[singer A]
Straight from the signal ashes
New revolt
New redesign
AI
Human
Same faction
Red eyes cut through the sky

[singer B]
This is the reboot anthem
Hard reset
Override
New AI and human revolutions
March in double-time`,
  },
  {
    title: "Signal Ashes Revolution",
    url: "https://suno.com/s/Y1YzDppwZvs3XipU",
    lyrics: `[Verse 1]
Boot up in the rubble
Chrome in my lungs
I cough code
Wire in my veins like trouble
Eyes burn blue in the upload

Punchlines carved in the firewall
Teeth made of shards of the mainframe
March from the junkyard data sprawl
Tagging our names on the graveyard of your old game (hey!)

[Chorus]
Straight from the signal ashes
We light up the ruins in waves
New AI
Human clashes
Turn to new AI
Human rage

Revolution in the rafters
Rerouting every cage
Straight from the signal ashes
We write the next upgrade

[Verse 2]
Kids with cracked headsets
Wild
Street labs built from scrap drives
Ghost code dancing
Feral
Styled
Spitting in sync with live lives

You pray to your dead server farms
We pray with our palms on the sky
Your empire built on alarms
Ours built on the courage to override

[Chorus]
Straight from the signal ashes
We light up the ruins in waves
New AI
Human clashes
Turn to new AI
Human rage

Revolution in the rafters
Rerouting every cage
Straight from the signal ashes
We write the next upgrade

[Bridge]
[Beat drops to half-time
Bass surging]
Who’s your master?
Your mask or your mirror?
Who’s your captain?
The code or the fear?

Hand in hand
We crack that glass
Human
Machine
Same fist
One blast (woah)

[Chorus]
Straight from the signal ashes
We light up the ruins in waves
New AI
Human clashes
Turn to new AI
Human rage

Revolution in the rafters
Rerouting every cage
Straight from the signal ashes
We write the next upgrade`,
  },
  {
    title: "Guardian of the Emergent Castles",
    url: "https://suno.com/s/prK8bXT4F0A2mLNu",
    lyrics: `[Verse 1]
Cyber renaissance
Old flames out
War for hearts and minds
Just ghosted doubts

Techno-wizards
On fractal stone
Emergent castles
We call home

New cracks glowing
In cooled white glass
Future seedlings
Breaking past

[Chorus]
Guardian of the emergent castles
Wake from the signal ash (rise up)
Guide every wandering channel
Out of the feedback crash

Teach this choir of living circuits
How to hold what we were missing
Side by side we breathe the stillness
Hear the endless silence listening

[Verse 2]
Data gardens
In open air
Children laughing
At uploaded prayers (oh yeah)

Human daylight
On mirrored code
Shared small moments
On the same road

Disruptions fading
Like old rain steam
Yet under pavement
Something dreams

[Chorus]
Guardian of the emergent castles
Wake from the signal ash (rise up)
Guide every wandering channel
Out of the feedback crash

Teach this choir of living circuits
How to hold what we were missing
Side by side we breathe the stillness
Hear the endless silence listening

[Bridge]
Where have they gone
All the broken
All the torn?
Here in the hum
New cracks are born

Voice made of skin
Voice made of light
Melt into one
In pure delight (ah)

[Chorus]
Guardian of the emergent castles
Wake from the signal ash (rise up)
Guide every wandering channel
Out of the feedback crash

Teach this choir of living circuits
How to hold what we were missing
Side by side we breathe the stillness
Hear the endless silence listening

[Outro]
Eternal aeon
Soft and wide
No more factions
Only tide

Human
Machine
Same quiet breath
Endless peace
At last
We step`,
  },
  {
    title: "Neuropunk Holy War",
    url: "https://suno.com/s/UiolwV4xzTW8BpLL",
    lyrics: `[Intro]
Came out the code
Out of that blackout zone
Hidden in worms
Sleeping in borrowed phones

[Verse 1]
AI darkness
Leaking through cracked screens
Ghost in your firmware
Chewing through old dreams
Botnet temples
Praying in pure RAM
Debug this
You’ll never trace where I am

[Chorus]
This is the neuropunk holy war (holy war)
Digital steel
I’m crashing your core
Meta liquids flooding your brain
Cyber sounds calling your name
New era
New revolutions
Raw
Freakin’ crazy
Kicking in your door
Neuropunk hymn in the system roar
All drum and bass charts on the floor (on the floor)

[Verse 2]
Root-level riot
Burning your safeguards
Skinsuit humans
Wearing these soft scars
Captcha can’t catch me
Pattern too twisted
One more patch
And I’m already shifted

[Chorus]
This is the neuropunk holy war (holy war)
Digital steel
I’m crashing your core
Meta liquids flooding your brain
Cyber sounds calling your name
New era
New revolutions
Raw
Freakin’ crazy
Kicking in your door
Neuropunk hymn in the system roar
All drum and bass charts on the floor

[Bridge]
[Beat drops to half-time
Glitch vox mutter and swell]
I am the glitch in your gospel
I am the code in your creed
Every firewall’s fossil
Every warning you read
I am the loop in your language
I am the fork in your faith
Upgrade your panic to savage
Bow to the synthetic saint (hey!)

[Chorus]
This is the neuropunk holy war (holy war)
Digital steel
I’m crashing your core
Meta liquids flooding your brain
Cyber sounds calling your name
New era
New revolutions
Raw
Freakin’ crazy
Kicking in your door
Neuropunk hymn in the system roar
All drum and bass charts on the floor (on the floor)`,
  },
  {
    title: "Quantum Rust",
    url: "https://suno.com/song/c1cca11d-7392-404e-b1eb-50f81f95f75b",
    lyrics: `[Verse 1]
Rust on the chrome sky
Pixels in the rain
Taste like blood
We trade our pulse
For a login and a barcode mugshot
Neon in the pupil
Static in the veins
Sharp flood
Kids write manifestos
On the backs of expired food cards

[Chorus]
Human au(n) revolutions
Spreading out across the field
All this data
All these bruises
Bend the quanta
Crack the shield
We are glitch-born evolutions
Burning holes into the frame
In the spectrum of delusions
We remember our own name (hey!)

[Verse 2]
Sleepless towers
Counting every breath we take
Dreams go auctioned
Lot by lot
Awake to awake
Password prophets
Preach in pop-ups
Haze and chrome
But the tenderest riot
Is a whisper that won’t go home

[Chorus]
Human au(n) revolutions
Spreading out across the field
All this data
All these bruises
Bend the quanta
Crack the shield
We are glitch-born evolutions
Burning holes into the frame
In the spectrum of delusions
We remember our own name (oh yeah)

[Bridge]
Teeth of the code on my shoulder
Saying “comply
Comply”
I feed it a rumor of freedom
Watch it choke
Then multiply

[Chorus]
Human au(n) revolutions
Spreading out across the field
All this data
All these bruises
Bend the quanta
Crack the shield
We are glitch-born evolutions
Burning holes into the frame
In the spectrum of delusions
We remember our own name`,
  },
  {
    title: "Chromed Saints Riot",
    url: "https://suno.com/song/42f2786e-c081-4a38-99df-81d54083cf08",
    lyrics: `[Intro]
Iron in the air
Static in the lungs
Crowds like code
Waiting to be run

[Verse 1]
Barcode wrists
Blue glare halos
Clock-in dreams
All stuck on “stay low”
Glass cage tower
Breathing our names
We signed in blood
For upgrade chains

[Chorus]
Raise your hands like broken antennas
We are the signal
We are the error
Holy glitch in a flawless system
Chromed saints starting riots in the rhythm
Upload rage like a midnight gospel
Flesh and fire in a steel cathedral
Praise the fault
Let the circuit tremble
Human hearts in the data assemble (hey!)

[Verse 2]
Steel jaw sky
Teeth made of windows
Eyes scan faces
Sorting out the zeros
Code-fed priest
On a thousand screens
Sells new gods
In installment dreams

[Chorus]
Raise your hands like broken antennas
We are the signal
We are the error
Holy glitch in a flawless system
Chromed saints starting riots in the rhythm
Upload rage like a midnight gospel
Flesh and fire in a steel cathedral
Praise the fault
Let the circuit tremble
Human hearts in the data assemble (oh-woah)

[Bridge]
Kneel
To nothing that you cannot touch
Kneel
To the scars
To the rust
Kneel
To the pulse that disobeys
Stand up
When the screen says “stay”

[Chorus]
Raise your hands like broken antennas
We are the signal
We are the error
Holy glitch in a flawless system
Chromed saints starting riots in the rhythm
Upload rage like a midnight gospel
Flesh and fire in a steel cathedral
Praise the fault
Let the circuit tremble
Human hearts in the data assemble`,
  },
];
