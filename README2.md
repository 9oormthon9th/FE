# 걸엉가게

This repository is for the frontend of the project '걸엉가게'.

- [Landing Page](https://github.com/9oormthon9th/FE)
- Frontend: This repository.
- [Backend Repository](https://github.com/9oormthon9th/BE2): Flask server for
  the project.
- [Deployment Repository](https://github.com/9oormthon9th/Deployment):
  Deployment on DKOS.

## Installation

1. Clone the git repository:
   ```bash
   git clone https://github.com/9oormthon9th/FE.git
   cd FE
   ```
2. Install node dependencies:

   ```bash
   npm ci
   ```

   We have tested the project with node v22.8.0 and npm v10.8.2.

## Usage

1. Set your Kakao JavaScript API key in the `./public/index.html` file.

   - You also need to check "앱 설정 > 플랫폼 > Web" section of the Kakao
     Developers.

   - Do not expose your API key to the public.

2. Run react app:
   ```bash
   npm start
   ```
