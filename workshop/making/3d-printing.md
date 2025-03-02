---
title: 3D Printing
parent: Making
nav_order: 1
---
# 3D Printing

## Printers

#### FDM

***personal ranking***
1. **Voron** - good hardware, very upgradeable + repairable, very open-source *(best option if you're fine with building it yourself)*
2. **Prusa** - good hardware, very upgradeable + repairable, but expensive
3. **Sovol** - SV06 ACE is a Prusa clone, SV08 is a Voron kit, very repairable + open
4. **Qidi** - well-priced CoreXY printers with some interesting features, prints engineering filaments out of the box
5. **Bambu Lab** - good hardware and decently repairable, but very closed ecosystem
6. **Creality** - meh hardware for the price, may not be as reliable as other brands

*Elegoo’s Centauri Carbon recently released, could possibly be an incredible value but wait for independent reviews to release*

##### Prusa

- **smaller bed-slinger:** Mini+
- **standard bed-slinger:** MK4S
- **upgrade CoreXY:** Core One

{: .note }
There no real reason why you should get the Prusa Mini+ unless you want a small printer/the cheapest printer from Prusa. Other options in this price range offer far better value (Sovol, Qidi, and Bambu Lab all have good options)

##### Sovol

- **cheaper bed-slinger:** SV06 Ace
- **larger CoreXY:** SV08

##### Qidi

- **cheaper CoreXY:** Qidi Q1 Pro
- **standard CoreXY:** Qidi Plus 4

##### Bambu Lab

- **smaller bed-slinger:** A1 Mini 
- **cheaper bed-slinger:** A1
- **standard CoreXY:** P1P / P1S *(P1S has an enclosure)*
- **upgrade CoreXY:** X1 Carbon

{: .warning }
> Bambu Lab has restricted access to its printers, so you are unable to use third-party software without changing to "Developer Mode" (LAN mode) in firmware after v4.0.0.0! 
> 
> If you want to continue using a Bambu Handy-like app with Bambu printers, I recommend the "Bambu Companion" app (unfortunately iOS only) with Tailscale. It works surprisingly well!

##### Creality

- **budget bed-slinger:** Ender 3 V3 SE or KE
	- *KE can print at higher temperatures + has linear rail for X-axis + has Klipper firmware*
- **upgrade CoreXY:** K2 Plus

##### Elegoo

- **cheaper CoreXY:** Centauri Carbon

{: .alternative }
The Centauri is even cheaper alternative if you don’t need an enclosure

##### Voron

- **fixed gantry CoreXY:** Voron Trident
- **moving gantry CoreXY:** Voron 2.4

#### Resin

- **smaller:** Elegoo Mars 5 Ultra
- **larger:** Elegoo Saturn 4 Ultra

## Filaments

#### Standard

- **PLA:** Hatchbox / Polymaker
	- **alternatives:** eSun / Sunlu
- **PLA Matte:** Polymaker PolyTerra
- **PETG:** Hatchbox / Polymaker / MatterHackers / Sunlu
- **wood:** Hatchbox Wood

#### Flexible

- **TPU:** NinjaFlex / Overture / Polymaker PolyFlex

#### Tougher

- **ABS:** Hatchbox / Polymaker
	- **alternative:** eSun
- **ASA:** Polymaker / Sunlu

## Tools

- **bed adhesion solution:** 3DLac
- **filament dryer:** Creality Space Pi
	- **alternative:** Sunlu S2 / S4
- **3D print recycler:** _shredder/extruder_
- **micro-shears:** Fiskars micro-tip pruning snips
- **3D pen:** 3Doodler Flow *(Pro+ has more features but is more expensive)*

## Storage

- **microSD cards:** Samsung Pro Plus
- **SD cards:** Sandisk Extreme Pro

## Addons

- **RFID for non-Bambu filaments:** OpenSpool
- **screen upgrade:** Panda Touch *(for P1 series)*
- **open-source multi-material system:** BoxTurtle / ERCF v2 / Tradrack *(for Klipper-based printers like Vorons)*

{: .note }
BoxTurtle and Tradrack seems to be much easier to put together than ERCF, but your mileage may vary. I have never used either.

## Software

- **slicer:** OrcaSlicer
- **print failure detection:** OctoEverywhere
- **Bambu Handy alternative:** Bambu Companion *(iOS only)*
- **print farm management:** Polar

{: .alternative-title }
> other good slicers
> 
> OrcaSlicer is based on PrusaSlicer, which itself is a very good slicer! 