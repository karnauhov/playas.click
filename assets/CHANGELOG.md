# Changelog

All notable changes to this application are documented in this file.

## [1.2.1] - 2026-03-10

### Added

- Map view on the main screen.
- CI pipeline with architecture guard checks, static analysis, and tests.
- Integration tests and expanded unit/widget test coverage.
- Agent workflow guidance (`AGENTS.md`) for repository maintenance.
- Unified runtime logging with `talker_flutter` for uncaught errors, routing, and BLoC/Cubit transitions.
- "Report an error" action on the About screen, clipboard diagnostics, and prefilled support email flow.
- Unit test coverage for the custom Talker formatter output.
- CostaFlow tool

### Changed

- Migrated runtime from FlutterFlow-generated code to clean Flutter architecture.
- Refactored project structure to feature-first + BLoC/Cubit + DI (`get_it`).
- Reworked bootstrap, routing, and shared orchestration layers.
- Updated release automation for Android (`apk`, `aab`) and Web artifacts.
- Updated Android compatibility to Android 16 (API level 36).
- Fixed image list and launch icons.
- Application performance optimization was completed: redundant setState calls were removed, BLoC subscriptions and map updates were optimized, resource caching was added, widget rebuilds were reduced, image and font handling was optimized, and performance benchmarks and regression protection were introduced.

### Fixed

- Web warnings and runtime exceptions.
- Centered the map/list view toggle icon.
- Added release-build configuration for the Android Google Maps API key.
- Localization consistency issue in one string.
- Review-tracked issues discovered during migration and architecture cleanup.

## [1.1.0] - 2026-01-19

### Added

- AdMob banner.

### Fixed

- Header font size.

## [1.0.0] - 2025-12-29

### Added

- Supported languages: English, Spanish, Ukrainian, Russian.
- Supported platforms: Web, Android.
- Main screen (list of tiles).
- Beach tile with photo, name, weather info, flags, distance.
- Select search area dialog.
- About screen.
- Privacy Policy screen.
