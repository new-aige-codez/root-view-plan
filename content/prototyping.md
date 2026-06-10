# Prototyping

## Current Design — V.2 (Active)

The V.2 design is a complete rethink around a smaller, cleaner microcontroller platform that solves V.1's installation challenges. Key decisions are settled; build is in progress.

### Hardware Platform
- **Microcontroller / Display:** 2.8" Waveshare ESP32 touchscreen module — confirmed. Compact enough to qualify as "mini cell phone" form factor.
- **Sensors:** DF Robot pH probe (3-week lead time from DigiKey, in transit) + ultrasonic water flow meter (AliExpress). These are open/non-proprietary sensors, enabling direct accuracy benchmarking against the Bluelab Combo Meter ($339) — the industry standard.
- **Valves:** US Solid full-port 1" ball valves (on hand). Each valve will get a custom wireless module for remote switching (RF or BLE TBD). Target architecture is modular: one master unit in the trough, with add-on remote valves per table — each sold separately.
- **Enclosure:** Custom 3D print (CAD to be designed by Brian; Elegoo Saturn resin printer or outsourced). Target IP rating: 1–2 meter submersion. Plexiglass touch cover with oleo/hydrophobic coating (under evaluation).
- **Power:** USB-C or barrel jack (primary). Solar: planned for a future version.

### pH Storage System
The device needs a small on-board reservoir of pH calibration/storage solution for sensor maintenance. Design: a small primary reservoir + pump connected to a secondary external reservoir via float check valve, so the device self-tops-off without user intervention.

### Trough Integration
Targets standard floor-drain troughs (~4"W × 5"D). Valves mount to drain lines (1" nominal); the master device sits in the trough and samples each zone sequentially by opening one valve at a time — isolating per-zone runoff so samples never mix.

### Modular Expansion
Three-valve first build (matching on-hand hardware). Future: additional remote ball valves pair wirelessly with the master unit — one per table. Same concept scales to per-plant readings with a catch basin + remote valve below individual plants.

---

## Open Questions

- [ ] Finalize wet-screen handling: firmware water-rejection only, or physical plexiglass overlay with oleo/hydrophobic coating?
- [ ] Confirm wireless protocol for remote valve modules: RF vs. BLE (ESP32 supports both; BLE preferred for range and pairing UX)
- [ ] Confirm additional connector modules needed between Waveshare ESP32 and DF Robot sensors
- [ ] Cloud/IoT backend decision: Supabase (recommended — easiest for Claude Code dev + ESP32 HTTPS/REST) vs. Firebase vs. undecided
- [ ] Sell BlueLab Combo meter to recover funds; confirm sale + telescoping pipe refund covers new BOM delta
- [ ] Begin CAD design for custom 3D-print enclosure

---

## V.1 — Original Prototype (Retired)

The V.1 was a proof-of-concept to validate the core measurement idea. It worked in bench testing but was never deployed due to an unsolved installation problem.

### What It Was
A painted ½" plywood box with three ball valves in a cross "T" configuration, allowing drain lines to connect from the left, front, and right. Controlled by manual toggle switches. Powered by a battery pack with a voltage sensor + charger. Used a Bluelab Combo Meter (pH + EC display), a turbine-style water flow sensor, a small pump to keep the pH sensor tip in storage solution, and a display for flow-meter readings.

### Why It Was Retired
The turbine/impeller sensor worked best with **vertical flow** — water needed to flow directly up into the sensor. This meant:
- The device had to sit ~9" off the ground to give drain lines enough height to reach it.
- Modern grow tables move (they're on wheels/casters), which means drain lines move with them.
- The combination of the fixed height requirement + moving drain lines was the blocking installation problem. Telescoping pipe was explored as a solution but was out-of-spec and the approach was abandoned.
- The result: never tested with actual runoff. The V.1 is functional as a bench demo, but not as a deployed system.

### What Was Learned
- The flow-sensor type must be compatible with horizontal/low-slope drain lines — hence the switch to an ultrasonic flow meter in V.2.
- The device needs to sit in or very near the trough floor, not elevated.
- Modular valve architecture (remote valves per table) is better than a centralized manifold.
- Non-proprietary sensors (DF Robot) simplify cross-calibration and avoid vendor lock-in.
