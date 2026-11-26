# Your AI Therapist's Diagnosis

[![make.fun](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
[![Rank](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/mochhidayah/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/rank.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
[![Reward](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/mochhidayah/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/reward.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)

Entry for the [make.fun bounty "Your AI Therapist's Diagnosis"](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41): the funniest single-line diagnosis an AI therapist hands its human, 200 characters or less.

## The diagnosis

> Diagnosis: acute main-character syndrome. You narrate your life in third person, then invoice me for the plot twists.

## How it works

`main.ts` is a tiny dependency-free Node program. It writes the diagnosis to `/output/entry.txt` (117 characters, inside the 200-character cap) and refuses to run if the line ever drifts outside 1–200 characters. No network, deterministic output.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
