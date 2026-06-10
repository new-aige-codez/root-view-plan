# Code — PRD & Architecture

## Product Requirements Document (PRD)

### Overview
Root View device firmware and companion app. The device is an ESP32-based automated runoff measurement system. The app provides remote monitoring, configuration, and historical data access.

### Device (ESP32 Firmware)

**Core loop:**
1. Detect runoff trigger — moisture sensors at each zone signal when runoff is present.
2. Open valve for Zone 1 → wait for flow → sample EC, pH, volume.
3. Close Zone 1 valve → flush sensor chamber → open Zone 2.
4. Repeat for all zones.
5. Log readings to onboard SD card.
6. Sync to cloud backend (Supabase) via HTTPS/REST when connected.

**User-configurable parameters (via touchscreen + app):**
- Sample schedule (triggered vs. timed)
- Valve sequence and timing
- Alert thresholds (EC high/low, pH out-of-range, volume below minimum)
- Calibration triggers (manual + scheduled)
- Wi-Fi credentials

**Hardware interfaces:**
- DF Robot pH sensor → analog or I2C
- Ultrasonic flow meter → pulse-count or serial
- US Solid 1" ball valves → relay modules or wireless (RF/BLE TBD)
- Waveshare ESP32 2.8" touchscreen → built-in display + touch
- SD card → onboard SD slot (logging)
- USB-C / barrel jack → power input

**OTA (over-the-air updates):** firmware updates hosted in Supabase Storage; `esp_https_ota` for update delivery.

---

### Companion App

**Platform:** React Native (iOS + Android) + web dashboard.
**Backend:** Supabase (Postgres + REST + Realtime + Auth + Storage).

**Key screens:**
- Live dashboard: current zone readings, last sample per zone, alert badges
- Historical charts: EC/pH/volume over time, per zone
- Settings: threshold config, valve sequencing, calibration controls
- Notifications: push alerts on out-of-range readings

---

## Architecture Notes

### Why Supabase
- Postgres is natural for time-series sensor rows (timestamp, zone_id, ec, ph, volume)
- Auto-generated REST API means no custom server code needed
- Realtime subscriptions work for live dashboard
- Auth + Storage built in
- ESP32 communicates via HTTPS/REST — simplest firmware implementation
- Easiest stack for Claude Code assisted development

### Scale context
Root View is single-facility or small-fleet scale at prototype/pilot stage. Supabase's free tier is sufficient for development. AWS IoT Core and fleet-scale MQTT are not needed until hundreds of deployed devices.

---

## Open Technical Questions

- [ ] Finalize wireless protocol for remote valve modules: RF (simple, low-cost) vs BLE (ESP32-native, pairing UX)
- [ ] Confirm exact connector modules needed for Waveshare ESP32 ↔ DF Robot sensors
- [ ] Decide touch screen moisture handling: firmware-only water rejection vs physical plexiglass overlay
- [ ] Confirm SD card pinout on Waveshare 2.8" module
- [ ] First OTA strategy: Supabase Storage hosted binary vs. GitHub Releases URL

---

## Repository

Link to the GitHub repository will appear here once created. The repo will contain:
- `/firmware` — ESP32 PlatformIO project
- `/app` — React Native companion app
- `/web` — Next.js web dashboard (or this site)
