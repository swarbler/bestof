---
title: 3D Printing
parent: Making
nav_order: 1
---
# 3D Printing

## Printers

#### FDM

***personal ranking***
1. **Voron** - good hardware, very upgradeable + repairable, very open-source 
	- *best option if you're fine with building it yourself*
2. **Prusa** - good hardware, very upgradeable + repairable
	- *gold standard for quality + customer support* 
3. **Qidi** - well-priced CoreXY printers with some interesting features, prints engineering filaments out of the box
	- *the Qidi Q1 Pro is an amazing value and very competitive with Bambu Lab!*
4. **Sovol** - SV06 ACE is a Prusa clone, SV08 is a Voron kit, very repairable + open
5. **Bambu Lab** - good hardware and some parts are replaceable, but very closed ecosystem
	- *Bambu Lab has locked down on third-party software!*
6. **Creality** - meh hardware for the price, may not be as reliable as other brands. 
	- *ecosystem is also quite closed, but less so than Bambu*

*Elegoo’s Centauri Carbon recently released, could possibly be an incredible value but wait for independent reviews to release*

##### Prusa

- **smaller bed-slinger:** Mini+ *($429 for kit, $459 for semi-assembled)*
- **standard bed-slinger:** MK4S *($729 for kit, $999 for pre-assembled)*
- **upgrade CoreXY:** Core One  *($949 for kit, $1,199 for pre-assembled)*

> There no real reason why you should get the Prusa Mini+ unless you want a small printer/the cheapest printer from Prusa. Other options in this price range offer far better value (Sovol, Qidi, and Bambu Lab all have good options)

##### Qidi

- **cheaper CoreXY:** Qidi Q1 Pro *(~~$599~~ $449)*
- **larger CoreXY:** Qidi Plus 4 *(~~$999~~ $799)*

##### Sovol

- **cheaper bed-slinger:** SV06 ACE *(~~$299~~ $279)*
- **larger bed-slinger:** SV06 Plus ACE *(~~$349~~ $299)*
- **larger CoreXY:** SV08 *(~~$599~~ $569)*

##### Bambu Lab

- **smaller bed-slinger:** A1 Mini  *(~~$299~~ $219)*
- **cheaper bed-slinger:** A1 *(~~$399~~ $359)*
- **standard CoreXY:** P1P  *(~~$699~~ $519)*
	- **with enclosure:** P1S  *(~~$699~~ $629)*
- **upgrade CoreXY:** X1 Carbon  *(~~$1,199~~ $1,149)*

{: .warning }
> Bambu Lab has restricted access to its printers, so you are unable to use third-party software without changing to "Developer Mode" (LAN only mode) in firmware after v4.0.0.0! 
> 
> If you want to continue using a Bambu Handy-like app with Bambu printers, I recommend the "Bambu Companion" app (unfortunately iOS only) with Tailscale. It works surprisingly well!

##### Creality

- **budget bed-slinger:** Ender 3 V3 SE or KE
	- *KE can print at higher temperatures + has linear rail for X-axis + has Klipper firmware*
- **upgrade CoreXY:** K2 Plus 

##### Elegoo

- **cheaper CoreXY:** Centauri Carbon *($299)*

> The Centauri *($199)* is even cheaper alternative if you don’t need an enclosure

##### Voron

- **fixed gantry CoreXY:** Voron Trident *(price varies depending on kit)*
- **moving gantry CoreXY:** Voron 2.4 *(price varies depending on kit)*

#### Resin

- **smaller:** Elegoo Mars 5 Ultra  *(~~$338~~ $269)*
- **larger:** Elegoo Saturn 4 Ultra  *(~~$524~~ $399)*

## Filaments

$?

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

$?

- **bed adhesion solution:** 3DLac
- **filament dryer:** Creality Space Pi
	- **alternative:** Sunlu S2 / S4
- **3D print recycler:** _shredder/extruder_
- **micro-shears:** Fiskars micro-tip pruning snips
- **3D pen:** 3Doodler Flow *(Pro+ has more features but is more expensive)*

## Storage

$?

- **microSD cards:** Samsung Pro Plus
- **SD cards:** Sandisk Extreme Pro

## Addons

- **RFID for non-Bambu filaments:** OpenSpool
- **screen upgrade:** Panda Touch *(for P1 series)*
- **open-source multi-material system:** BoxTurtle / ERCF v2 / Tradrack *(for Klipper-based printers like Vorons)*

> BoxTurtle and Tradrack seems to be much easier to put together than ERCF, but your mileage may vary. I have never used either.

## Software

- **slicer:** OrcaSlicer
- **printer software:** OctoPrint *(remote access, automated print failure detection, etc.)*
	- **plugins**
		- Dashboard *(a dashboard for monitoring the printer)*
		- Arc Welder *(reduces stuttering during printing by modifying gcode)*
		- OctoEverywhere *(automated print failure detection)*
		- Filament Manager *(manage spools of filament)*
		- PrintTimeGenius *(more accurate print time estimates)*
		- OctoLapse *(timelapses)*
		- Exclude Region *(prevent printing within a region in the current gcode)*
		- Simple Emergency Stop
		- UI Customiser
		- *loads of other plugins exist, try them out!*
- **Bambu Handy alternative:** Bambu Companion *(iOS only)*
- **print farm management:** Polar

> OrcaSlicer is based on PrusaSlicer, which itself is a very good slicer! 

## Other

- **vacuum-seal bags:** *any will do, eSun and Eibos kits seem pretty good*