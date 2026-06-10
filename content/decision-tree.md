# Decision Tree Archive

*Past decisions with notes on why each path was abandoned. The live diagram is above.*

---

## Abandoned Paths

### Hardware — Flow Sensor Type
**Decision:** Turbine/impeller sensor (V.1) → **Ultrasonic flow meter (V.2)**
**Abandoned because:** The impeller sensor required vertical water flow — water had to flow upward into the sensor. This forced the device to sit ~9" off the ground so drain lines could reach it. Modern grow tables move (wheels/casters), making this height requirement impractical in real facilities. Ultrasonic meters work with horizontal drain-line flow and have no height requirement.

### Hardware — Microcontroller Platform
**Decision:** Arduino-based (V.1) → **Waveshare ESP32 2.8" (V.2)**
**Abandoned because:** V.1 used discrete components without a built-in display. V.2 targets a smaller, self-contained touchscreen MCU. ESP32 also provides built-in Wi-Fi/BLE for app connectivity — a requirement not prioritized in V.1.

### Hardware — Enclosure
**Decision:** Commercial off-the-shelf IP-rated enclosure → **Custom 3D print**
**Abandoned because:** No suitable commercial enclosure matched the required form factor (device needs to integrate with ~4"W × 5"D troughs while housing the valve manifold, sensor chamber, and display). Custom CAD + Elegoo Saturn resin print (or outsourced) gives full dimensional control.

### Hardware — Display Size
**Decision:** 4" square Waveshare display (leading candidate) → **2.8" Waveshare display (confirmed)**
**Abandoned because:** 4"×4" is too large for the target enclosure and "mini cell phone" form factor goal. 2.8" is the right balance of readability and footprint.

### Installation Architecture — Telescoping Pipe
**Decision:** Telescoping drain pipe connector (to handle moving grow tables) → **Abandoned**
**Abandoned because:** Telescoping pipe solution was out-of-spec; the purchased unit was returned for an $85.55 refund. The V.2 trough-seat architecture sidesteps the moving-drain-line problem by placing the device at the trough floor and using remote valve modules at each table rather than routing all lines to a central manifold.

### pH Maintenance — Storage Solution Top-Off
**Decision:** Manual refill → **Automated float-valve + secondary reservoir**
**Decided:** Primary reservoir (small, on-device) + pump to keep sensor tip in solution. Secondary external reservoir feeds the primary via float check valve for automated top-off. This avoids daily manual intervention.

### IoT Backend (Open)
**Under evaluation:** Supabase (recommended) vs. Firebase vs. undecided
**Not yet abandoned:** Still open — see Code page for full comparison. Supabase is the leading candidate for ESP32 HTTPS/REST compatibility + Claude Code assisted development.

### Exit Primary Target
**Under evaluation:** AROYA-first → broaden if needed
**Not yet abandoned:** AROYA is the primary target; CEA produce (strawberry, tomato licensees) and other platforms are the parallel/fallback path. Decision to broaden is triggered if no AROYA interest emerges within 6–12 months of strategic conversation.
