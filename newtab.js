// ========================================
// TENNIS WIDGETS & MAIN CONTENT
// ========================================
        const layouts = [
            // Imágenes fullscreen CON TEXTO
            { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/01.jpg', text: 'DON’T DRIFTs.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/02.jpg', text: 'KEEP GOING.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/03.jpg', text: 'BACK TO CENTER.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/04.jpg', text: 'RITUALS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/05.jpg', text: 'THIS IS YOUR STAGE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/06.jpg', text: 'LET IT OUT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/07.jpg', text: 'DON’T STOP. JUST PAUSE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/08.jpg', text: 'YOU’LL BE BACK.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/09.jpg', text: 'DEEP FOCUS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/10.jpg', text: 'VISUALIZE TO ADJUST.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/11.jpg', text: 'BREAk.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/12.jpg', text: 'BACK TO BASICS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/13.jpg', text: 'THE MARGIN MATTERS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/14.jpg', text: 'FIND YOUR BALANCE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/15.jpg', text: 'RESET THE POINT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/16.jpg', text: 'THIS IS YOUR MOMENT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/17.jpg', text: 'COMPOSE YOURSELF.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/18.jpg', text: 'FIND YOUR RHYTHM.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/19.jpg', text: 'YOU’VE BEEN WAITING FOR THIS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/20.jpg', text: 'DREAMS DON’T WAIT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/21.jpg', text: 'FACE IT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/22.jpg', text: 'YOU’RE NOT ALONE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/23.jpg', text: 'STAY WITH IT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/24.jpg', text: 'KEEP SHOWING UP.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/25.jpg', text: 'THIS WILL SHAPE YOU.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/26.jpg', text: 'ENJOY THE GAME.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/27.jpg', text: 'THE GAME DOESN’T END ON THE COURT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/28.jpg', text: 'YOUR FUTURE ISN’T BUILT ONLY ON THE COURT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/29.jpg', text: 'EVERY MILE COUNTS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/30.jpg', text: "REST IS TRAINING TOO." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/31.jpg', text: 'MAKE THE STREETS YOUR COURT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/32.jpg', text: 'EYES ON THE WIN.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/33.jpg', text: 'OWN YOUR MOMENT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/34.jpg', text: 'REFLECT. RESET. RISE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/35.jpg', text: 'WEATHER THE STORM.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/36.jpg', text: 'VICTORY TASTES BETTER.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/37.jpg', text: 'REST FUELS DREAMS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/38.jpg', text: 'NOURISH YOUR JOURNEY.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/39.jpg', text: 'TRUST YOUR PREPARATION.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/40.jpg', text: 'BALANCE BUILDS STRENGTH.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/41.jpg', text: 'FEEL THE MOMENT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/42.jpg', text: 'ONE STEP AT A TIME.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/43.jpg', text: "BREATHE AND BELIEVE." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/44.jpg', text: "ENJOY THE RIDE." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/45.jpg', text: 'PRACTICE MAKES YOU.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/46.jpg', text: 'THIS IS YOUR STAGE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/47.jpg', text: 'DREAM BIG.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/48.jpg', text: 'RECOVER TO GROW.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/49.jpg', text: 'VISUALIZE YOUR MOMENT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/50.jpg', text: 'REFLECT AND RESET.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/51.jpg', text: "KEEP MOVING FORWARD." },

  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/52.jpg', text: 'BREATHE IT IN.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/53.jpg', text: 'FIND YOUR WAY.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/54.jpg', text: 'WHEREVER YOU ARE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/55.jpg', text: 'TAKE YOUR TIME.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/56.jpg', text: 'BUILD YOUR BRIDGE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/57.jpg', text: 'PAUSE. PREPARE. PLAY.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/58.jpg', text: 'HOLD ON.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/59.jpg', text: 'STRETCH YOUR LIMITS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/60.jpg', text: 'CONNECT WITH YOURSELF.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/61.jpg', text: 'RUN YOUR OWN TRACK.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/62.jpg', text: 'CROSS EVERY LINE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/63.jpg', text: 'BACK TO HOME.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/64.jpg', text: 'JUST BREATHE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/65.jpg', text: 'PASSION OUTLASTS RAIN.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/66.jpg', text: 'READY IS A CHOICE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/67.jpg', text: 'PACK YOUR DREAMS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/68.jpg', text: 'ROADS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/69.jpg', text: 'SEE IT. BELIEVE IT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/70.jpg', text: 'RESET.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/71.jpg', text: 'YOU ARE DOING GOOD.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/72.jpg', text: 'EARN YOUR VIEW.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/73.jpg', text: 'ALWAYS READY.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/74.jpg', text: 'EVERY LAST POINT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/75.jpg', text: 'BEFORE THE BATTLE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/76.jpg', text: 'BREATHE AND SWING.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/77.jpg', text: 'MORNING RITUALS MATTER.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/78.jpg', text: 'RESPECT YOUR TOOLS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/79.jpg', text: 'WAIT FOR YOUR TURN.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/80.jpg', text: 'FEEL IT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/81.jpg', text: 'LEFT IT ALL OUT THERE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/82.jpg', text: 'QUIET MOMENTS COUNT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/83.jpg', text: 'SEEK YOUR ANSWERS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/84.jpg', text: 'FREEDOM.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/85.jpg', text: 'DO IT ANYWAY.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/86.jpg', text: 'STAY BRAVE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/87.jpg', text: 'RISE ABOVE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/88.jpg', text: 'NOT ALONE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/89.jpg', text: 'MORNING FUEL MATTERS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/90.jpg', text: 'WALK YOUR PATH.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/91.jpg', text: 'BEYOND YOUR LIMITS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/92.jpg', text: 'RITUALS BUILD CHAMPIONS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/93.jpg', text: 'STAY HUNGRY.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/94.jpg', text: 'GROW YOUR MIND.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/95.jpg', text: 'OCEAN OF POSSIBILITIES.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/96.jpg', text: 'ENJOY THE GRIND.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/97.jpg', text: 'PAUSE AND REFLECT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/98.jpg', text: 'FIRST ONE IN.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/99.jpg', text: 'TOMORROW IS YOURS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/100.jpg', text: "IT'S YOUR TURN." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/101.jpg', text: 'JUMP INTO IT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/102.jpg', text: 'BACK DOOR TO DREAMS.' },

  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/103.jpg', text: 'TIME TO RECOVER.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/104.jpg', text: 'EVERYTHING TO PLAY FOR.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/105.jpg', text: 'HOME IS YOUR HAVEN.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/106.jpg', text: 'REST TO GIVE MORE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/107.jpg', text: 'TREAT YOURSELF RIGHT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/108.jpg', text: 'ANYWHERE IS YOUR GYM.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/109.jpg', text: 'VISUALIZE YOUR DAY.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/110.jpg', text: 'BRING IT ON.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/111.jpg', text: 'NEVER STOP MOVING.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/112.jpg', text: 'STAY BRAVE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/113.jpg', text: 'CLIMB EVERY LEVEL.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/114.jpg', text: 'RUN TOWARDS IT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/115.jpg', text: 'EVEN CHAMPS DO LAUNDRY.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/116.jpg', text: 'STILLNESS BEFORE STORM.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/117.jpg', text: 'TOUGH NIGHTS BUILD YOU.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/118.jpg', text: 'HYDRATE YOUR HUSTLE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/119.jpg', text: 'CHECK YOURSELF.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/120.jpg', text: 'FIND YOUR CALM.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/121.jpg', text: 'YOUR STAGE AWAITS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/122.jpg', text: 'RECHARGE YOUR SOUL.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/123.jpg', text: 'FIND YOUR CENTER.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/124.jpg', text: 'SMALL ACTS, BIG IMPACT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/125.jpg', text: 'IN THE MOMENT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/126.jpg', text: 'HIDDEN HOURS COUNT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/127.jpg', text: 'FUEL YOUR PURPOSE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/128.jpg', text: 'QUIET BEFORE THE STORM.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/129.jpg', text: 'CLIMB YOUR WAY.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/130.jpg', text: 'ONE MORE POINT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/131.jpg', text: 'CITY IS YOUR COURT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/132.jpg', text: 'FOGGY DAYS, CLEAR MIND.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/133.jpg', text: 'NOTHING STOPS YOU.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/134.jpg', text: 'FIRST LIGHT, FIRST SERVE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/135.jpg', text: 'MORNING POWER UP.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/136.jpg', text: 'LIVING ROOM LEGENDS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/137.jpg', text: 'TIME TO MOVE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/138.jpg', text: 'SEEK THE SUMMIT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/139.jpg', text: 'RISE THROUGH THE HAZE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/140.jpg', text: 'MOVING FORWARD ALWAYS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/141.jpg', text: 'CROSS TO THE OTHER SIDE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/142.jpg', text: 'READY FOR TOMORROW.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/143.jpg', text: 'HILLS BUILD POWER.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/144.jpg', text: 'AFTER THE BATTLE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/145.jpg', text: 'HALLWAYS TO SOMEWHERE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/146.jpg', text: 'ANALYZE TO IMPROVE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/147.jpg', text: 'LOOK UP, RISE UP.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/148.jpg', text: 'STEER YOUR STORY.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/149.jpg', text: 'TENSION BEFORE RELEASE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/150.jpg', text: 'DETAILS WIN MATCHES.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/151.jpg', text: 'HOLD YOUR GROUND.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/152.jpg', text: 'EYES ON TOMORROW.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/153.jpg', text: "RUN LIKE YOU MEAN IT." },

  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/154.jpg', text: 'REFLECT TO GROW.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/155.jpg', text: 'ONE BY ONE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/156.jpg', text: 'DRIVE YOUR VISION.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/157.jpg', text: 'RITUAL OF READINESS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/158.jpg', text: 'LEAP HIGHER ALWAYS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/159.jpg', text: 'COVERED, NOT HIDDEN.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/160.jpg', text: 'WHEN OTHERS SLEEP.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/161.jpg', text: 'HOME ADVANTAGE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/162.jpg', text: 'GAZE AT GREATNESS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/163.jpg', text: 'STORM THROUGH IT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/164.jpg', text: "WAITING DOESN'T WASTE." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/165.jpg', text: 'ICE BATH THERAPY.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/166.jpg', text: 'MORNING STRETCH RITUAL.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/167.jpg', text: 'THAT FEELING AFTER.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/168.jpg', text: 'UNLEASH EVERYTHING.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/169.jpg', text: 'COLLECT YOURSELF HERE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/170.jpg', text: 'CIRCLE OF GROWTH.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/171.jpg', text: 'WASH AWAY YESTERDAY.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/172.jpg', text: 'RUN TOWARD THE LIGHT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/173.jpg', text: 'SMART SNACKING.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/174.jpg', text: 'DOME OF DETERMINATION.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/175.jpg', text: 'FINGERS BUILD FUTURES.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/176.jpg', text: 'MIRROR YOUR PROGRESS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/177.jpg', text: 'HORIZON MINDSET.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/178.jpg', text: 'WILD ROADS BUILD YOU.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/179.jpg', text: 'STEADY ON THE EDGE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/180.jpg', text: 'DANCE YOUR WAY.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/181.jpg', text: 'HEIGHTS FEAR NOTHING.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/182.jpg', text: 'GRAY DAY, CLEAR GOALS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/183.jpg', text: "UNWAVERING GAZE." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/184.jpg', text: 'GRATEFUL FOR THIS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/185.jpg', text: 'CHASE THE FADING LIGHT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/186.jpg', text: 'OCEAN AIR, IRON WILL.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/187.jpg', text: 'SUNSET STATE OF MIND.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/188.jpg', text: 'PAUSE TO PLAN.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/189.jpg', text: 'STREETS ARE YOUR STADIUM.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/190.jpg', text: 'RIDE TO RECOVERY.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/191.jpg', text: 'WRITE YOUR STORY.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/192.jpg', text: 'YOUR ROOM, YOUR REFUGE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/193.jpg', text: 'LOOKING BEYOND LIMITS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/194.jpg', text: 'PRACTICE ABOVE IT ALL.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/195.jpg', text: 'COMMUTE TO GREATNESS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/196.jpg', text: "TRUNK FULL OF AMBITION." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/197.jpg', text: "YOU'VE SURVIVED THIS." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/198.jpg', text: 'FRESH START BEGINS HERE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/199.jpg', text: 'BARRIERS ARE TEMPORARY.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/200.jpg', text: 'LOVE THE PROCESS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/201.jpg', text: 'NOTHING ELSE EXISTS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/202.jpg', text: 'EYES CLOSED, DREAMS OPEN.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/203.jpg', text: 'WAITING FOR YOUR MOMENT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/204.jpg', text: "SMALL STOPS, BIG JOURNEY." },

  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/205.jpg', text: 'CHASE EVERY BALL.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/206.jpg', text: 'STEEL IN YOUR EYES.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/207.jpg', text: 'MILES TO GO.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/208.jpg', text: 'NATURE RESETS YOU.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/209.jpg', text: 'GRATITUDE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/210.jpg', text: 'ONE DAY YOURS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/211.jpg', text: 'TRAVELING DREAMS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/212.jpg', text: 'EVERY MILE MATTERS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/213.jpg', text: 'EAT WITH PURPOSE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/214.jpg', text: 'BAD DAYS BUILD CHARACTER.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/215.jpg', text: 'CLIMB YOUR OWN STAIRS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/216.jpg', text: 'THIS IS THE STAGE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/217.jpg', text: "IT'S OKAY TO PAUSE." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/218.jpg', text: 'WALK YOUR PATH.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/219.jpg', text: 'THIS IS WHY YOU TRAIN.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/220.jpg', text: 'SKYLINE YOUR AMBITION.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/221.jpg', text: 'CONSISTENCY ON THE ROAD.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/222.jpg', text: 'RISE ABOVE THE NOISE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/223.jpg', text: 'WHEN OTHERS SLEEP.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/224.jpg', text: 'CHASE THE LIGHT.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/225.jpg', text: 'SAND MAKES YOU STRONGERs.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/226.jpg', text: 'PLAN YOUR NEXT MOVE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/227.jpg', text: "WEATHER DOESN'T STOP PLANS." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/228.jpg', text: 'READY FOR ANYTHING.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/229.jpg', text: 'DEDICATION HAS NO ADDRESS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/230.jpg', text: 'EVERY HALL LEADS ON.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/231.jpg', text: 'TRACKS TO TOMORROW.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/232.jpg', text: 'LET IT ALL GO.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/233.jpg', text: 'THROUGH THE DARKNESS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/234.jpg', text: "BACKYARD WARRIOR" },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/235.jpg', text: 'EVERY STEP COUNTS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/236.jpg', text: 'FLYING TO YOUR FUTURE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/237.jpg', text: 'CONTINUE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/238.jpg', text: 'BUILD FROM THE BASE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/239.jpg', text: 'START BEFORE SUNRISE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/240.jpg', text: 'STEPS TO THE TOP.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/241.jpg', text: 'THE FUTURE IS CLOSER THAN IT FEELS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/242.jpg', text: 'IMPORTANT DAYS START LIKE THIS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/243.jpg', text: 'THERE’S ALWAYS ANOTHER STEP.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/244.jpg', text: 'NOW. ONLY NOW.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/245.jpg', text: 'YOU’RE NOT ALONE IN THIS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/246.jpg', text: 'SMILE. KEEP GOING.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/247.jpg', text: "FEEL IT." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/248.jpg', text: "NO ONE WALKS IN FOR YOU." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/249.jpg', text: 'THE INVISIBLE COUNTS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/250.jpg', text: "THE MOMENT DOESN’T WARN YOU." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/251.jpg', text: 'WHAT HURTS SHAPES YOU.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/252.jpg', text: 'TAKING CARE IS COMPETING.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/253.jpg', text: 'BREATHE. YOU KNOW THIS.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/254.jpg', text: 'POWER IS BUILT HERE.' },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/255.jpg', text: "YOUR VOICE PLAYS TOO." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/256.jpg', text: "LEARN HOW TO LEAVE." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/257.jpg', text: "TENNIS DOESN’T DISAPPEAR." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/258.jpg', text: "THE COURT IS WAITING." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/259.jpg', text: "EVERYTHING STARTS HERE." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/260.jpg', text: "THE GAME DOESN’T WAIT." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/261.jpg', text: "TOMORROW CONTINUES." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/262.jpg', text: "ONE SECOND CHANGES EVERYTHING." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/263.jpg', text: "IT’S NOT ALWAYS COMFORTABLE." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/264.jpg', text: "LISTEN TO YOUR BODY." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/265.jpg', text: "DISCIPLINE OFF THE COURT." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/266.jpg', text: "ONE MOVE, A THOUSAND TIMES." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/267.jpg', text: "NO ONE PUSHES YOU." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/268.jpg', text: "ONE MORE STEP." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/269.jpg', text: "THE BASE IS EVERYTHING." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/270.jpg', text: "GO FOR IT." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/271.jpg', text: "NO SHORTCUTS." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/272.jpg', text: "EVERY MINUTE COUNTS." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/273.jpg', text: "THIS IS A CHOICE." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/274.jpg', text: "TRUST IT." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/275.jpg', text: "DON’T LET GO." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/276.jpg', text: "NOT GLAMOUR. PROGRESS." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/277.jpg', text: "READY FOR WHAT’S NEXT." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/278.jpg', text: "SCREAM IF YOU NEED TO." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/279.jpg', text: "THE DRIVE IS YOURS." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/280.jpg', text: "EVERY HIT SHAPES YOU." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/281.jpg', text: "DON’T HESITATE NOW." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/282.jpg', text: "NOT EVERYTHING IS SPEED." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/283.jpg', text: "THIS NEVER SHOWS ON THE SCOREBOARD." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/284.jpg', text: "EFFORT NEEDS NO STAGE." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/285.jpg', text: "REPEAT TO BELIEVE." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/286.jpg', text: "WHEN THE GROUND GIVES, YOU DON’T." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/287.jpg', text: "HOLDING ON IS PART OF THE PLAN." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/288.jpg', text: "BREATHE. PUSH. REPEAT." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/289.jpg', text: "GETTING THERE IS PART OF THE GAME." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/290.jpg', text: "FOUNDATION BEFORE FLASH." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/291.jpg', text: "IT’S NOT ALL PAIN." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/292.jpg', text: "SIMPLE THINGS ADD UP." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/293.jpg', text: "HARD PREPARES YOU." },
  { type: 'fullscreen', url: 'https://raw.githubusercontent.com/judehale/tblc-assets/refs/heads/main/294.jpg', text: "NO SHOW. ALL PURPOSE." },
            
            // Imágenes centradas
            //{ type: 'centered', url: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=800&q=80' },
            
            // Textos grandes
            //{ type: 'text', content: 'My work explores a cinematic approach to emotion and contemporary ', highlight: 'culture', rest: '. I\'m available for creative projects.' },
        ];

        function updateDay() {
            const now = new Date();
            const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
            const day = now.getDate();
            const month = months[now.getMonth()];
            const year = now.getFullYear();
            document.getElementById('day').textContent = month + ' ' + day + ', ' + year;
        }

        function typewriterEffect(element, text, speed = 50) {
            let i = 0;
            element.textContent = '';
            
            function type() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                     //playTypeSound(); // ← Sonido de tecla
                    i++;
                    setTimeout(type, speed);
                }
            }
            
            type();
        }

        function renderContent(layout) {
            const container = document.getElementById('mainContainer');
            let html = '';
            
            if (layout.type === 'fullscreen') {
                html = '<div class="layout-fullscreen">';
                html += '<img src="' + layout.url + '">';
                if (layout.text) {
                    html += '<div class="fullscreen-text"><span class="typewriter-text"></span></div>';
                }
                html += '</div>';
                
                container.innerHTML = html;
                
                // Aplicar efecto máquina de escribir si hay texto
                if (layout.text) {
                    const textElement = container.querySelector('.typewriter-text');
                    if (textElement) {
                        //typewriterEffect(textElement, layout.text + " / " + layout.url, 1); //cambiar luego de 1 a 80
                        typewriterEffect(textElement, layout.text, 60); //cambiar luego de 1 a 80
                    }
                }
            } else if (layout.type === 'centered') {
                html = '<div class="layout-centered"><img src="' + layout.url + '"></div>';
                container.innerHTML = html;
            } else if (layout.type === 'mockups') {
                html = '<div class="layout-mockups">';
                layout.urls.forEach(url => {
                    html += '<img src="' + url + '">';
                });
                html += '</div>';
                container.innerHTML = html;
            } else if (layout.type === 'text') {
                html = '<div class="layout-text">' + layout.content + '<span class="highlight">' + layout.highlight + '</span>' + layout.rest + '</div>';
                container.innerHTML = html;
            }
        }

        function showWithFade(callback) {
            const container = document.getElementById('mainContainer');
            
            // Fade out actual
            container.style.transition = 'opacity 0.5s ease-in-out';
            container.style.opacity = '0';
            
            // Cambiar contenido después del fade out
            setTimeout(() => {
                callback().then(() => {
                    // Fade in inmediato
                    setTimeout(() => {
                        container.style.opacity = '1';
                    }, 50);
                });
            }, 500);
        }

        let shuffledIndices = [];
        let currentShuffleIndex = 0;

        function preloadImage(url) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = url;
            });
        }

        function shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        function initializeShuffle() {
            // Crear array con todos los índices
            const indices = Array.from({ length: layouts.length }, (_, i) => i);
            shuffledIndices = shuffleArray(indices);
            currentShuffleIndex = 0;
        }

        function showRandomContent() {
            return new Promise((resolve) => {
                // Si es la primera vez o se acabaron las imágenes, re-shuffle
                if (shuffledIndices.length === 0 || currentShuffleIndex >= shuffledIndices.length) {
                    initializeShuffle();
                }
                
                const randomIndex = shuffledIndices[currentShuffleIndex];
                currentShuffleIndex++;
                
                const selectedLayout = layouts[randomIndex];
                
                // Si es una imagen, precargarla antes de mostrar
                if (selectedLayout.type === 'fullscreen' || selectedLayout.type === 'centered') {
                    preloadImage(selectedLayout.url).then(() => {
                        renderContent(selectedLayout);
                        resolve();
                    }).catch(() => {
                        renderContent(selectedLayout);
                        resolve();
                    });
                } else if (selectedLayout.type === 'mockups') {
                    Promise.all(selectedLayout.urls.map(url => preloadImage(url)))
                        .then(() => {
                            renderContent(selectedLayout);
                            resolve();
                        })
                        .catch(() => {
                            renderContent(selectedLayout);
                            resolve();
                        });
                } else {
                    renderContent(selectedLayout);
                    resolve();
                }
            });
        }

        // Inicializar
        updateDay();
        showRandomContent();

        // Cambiar contenido al hacer clic CON FADE
        document.body.addEventListener('click', function() {
            showWithFade(showRandomContent);
        });

// ========================================
// TENNIS WIDGETS LOGIC
// ========================================
// ========================================
// EDITA AQUÍ TUS TORNEOS Y PARTIDOS
// ========================================

// ========================================
// CONFIGURACIÓN DE DATOS
// ========================================
// Cargando desde tu GitHub - actualiza el JSON en GitHub para cambiar los partidos
// ========================================
// CONFIGURACIÓN DE DATOS
// ========================================
// API principal
const API_ENDPOINTS = {
    tennis: "https://api.thebreaklettersclub.com/v1/tournaments/live",
    comments: "https://api.thebreaklettersclub.com/v1/messages"
};

// Fallback a datos estáticos si la API no responde
const FALLBACK_ENDPOINTS = {
    tennis: "https://raw.githubusercontent.com/judehale/tblc-assets/main/tennis-data-example.json",
    comments: "https://raw.githubusercontent.com/judehale/tblc-assets/main/jude_comments.json"
};

// Función para cargar datos con fallback automático
async function fetchWithFallback(primaryUrl, fallbackUrl) {
    try {
        const response = await fetch(primaryUrl);
        if (!response.ok) throw new Error('API unavailable');
        return await response.json();
    } catch (error) {
        console.log('Using fallback data source');
        const response = await fetch(fallbackUrl);
        return await response.json();
    }
}

const EXTERNAL_JSON_URL = "https://raw.githubusercontent.com/judehale/tblc-assets/main/tennis-data-example.json";
const USE_EXTERNAL_JSON = true; // Activado para leer desde GitHub

// Opción 2: Datos estáticos (si USE_EXTERNAL_JSON = false)
const tennisData = {
    widget1: {
        header: "ITF TOURNAMENT",
        tournament: "PARIS M25",
        matches: [
            {
                player1: "JAKUB MENSIK",
                player2: "ARTHUR FILS",
                score1: ["6", "7", "-"],
                score2: ["4", "5", "-"]
            }
        ]
    },
    widget2: {
        header: "CHALLENGER",
        tournament: "NEWPORT BEACH",
        matches: [
            {
                player1: "LEARNER TIEN",
                player2: "ALEX MICHELSEN",
                score1: ["6", "3", "6"],
                score2: ["4", "6", "4"]
            }
        ]
    }
};

// ========================================
// AUDIO WIDGET CONFIGURATION
// ========================================
const AUDIO_CONFIG = {
    enabled: false, // Cambia a true para activar el widget de audio
    url: "https://tuservidor.com/audio.mp3", // URL de tu archivo de audio
    title: "EPISODE 001" // Título que aparecerá en el widget
};

// ========================================
// API CONFIGURATION
// ========================================
// Datos estáticos editables - Actualiza aquí los partidos que quieras mostrar
const USE_API = false;
const API_KEY = "***********************";

// Audio Widget Controls
function initAudioWidget() {
    if (!AUDIO_CONFIG.enabled) return;
    
    const audioWidget = document.getElementById('audio-widget');
    const audioPlayer = document.getElementById('audio-player');
    const playButton = document.getElementById('play-button');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const audioTime = document.getElementById('audio-time');
    const audioTitle = document.getElementById('audio-title');
    
    // Configurar audio
    audioPlayer.src = AUDIO_CONFIG.url;
    audioTitle.textContent = AUDIO_CONFIG.title;
    audioWidget.style.display = 'block';
    
    // Formatear tiempo
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    // Play/Pause
    playButton.addEventListener('click', (e) => {
        e.stopPropagation();
        if (audioPlayer.paused) {
            audioPlayer.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            audioPlayer.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    });
    
    // Actualizar tiempo
    audioPlayer.addEventListener('timeupdate', () => {
        const current = formatTime(audioPlayer.currentTime);
        const duration = formatTime(audioPlayer.duration || 0);
        audioTime.textContent = `${current} / ${duration}`;
    });
    
    // Reset al terminar
    audioPlayer.addEventListener('ended', () => {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    });
}

function displayStaticData() {
    const widgetsContainer = document.querySelector('.tennis-widgets');
    widgetsContainer.innerHTML = ''; // Limpiar widgets existentes
    
    // Crear widgets
    Object.keys(tennisData).forEach(widgetKey => {
        const tournament = tennisData[widgetKey];
        
        // Si es un widget de audio
        if (tournament.type === 'audio') {
            const audioHTML = `
                <div class="audio-widget">
                    <div class="widget-header">${tournament.header || 'AUDIO'}</div>
                    <div class="widget-title">${tournament.title || 'TRACK'}</div>
                    <div class="audio-player">
                        <button class="play-pause-btn" data-audio="${tournament.url}">▶</button>
                        <div class="audio-info">${tournament.description || ''}</div>
                        <div class="audio-time">0:00</div>
                    </div>
                </div>
            `;
            widgetsContainer.insertAdjacentHTML('beforeend', audioHTML);
        }
        // Si es un widget de torneo
        else if (tournament && tournament.matches && tournament.matches.length > 0) {
            const match = tournament.matches[0];
            
            // Determinar quién ganó
            const score1Total = match.score1.filter(s => s !== '-').reduce((sum, s) => sum + parseInt(s), 0);
            const score2Total = match.score2.filter(s => s !== '-').reduce((sum, s) => sum + parseInt(s), 0);
            
            const player1Won = score1Total > score2Total;
            const player2Won = score2Total > score1Total;
            
            const widgetHTML = `
                <div class="widget-card">
                    <div class="widget-header">${tournament.header || 'TOURNAMENT'}</div>
                    <div class="widget-title">${tournament.tournament || 'UNKNOWN'}</div>
                    <div class="widget-matches">
                        <div class="match-row ${player1Won ? 'winner' : 'loser'}">
                            <div class="player-name">${match.player1}</div>
                            <div class="match-score">
                                ${match.score1.map(s => `<span class="score-set">${s}</span>`).join('')}
                            </div>
                        </div>
                        <div class="match-row ${player2Won ? 'winner' : 'loser'}">
                            <div class="player-name">${match.player2}</div>
                            <div class="match-score">
                                ${match.score2.map(s => `<span class="score-set">${s}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            widgetsContainer.insertAdjacentHTML('beforeend', widgetHTML);
        }
    });
    
    // Añadir event listeners
    addWidgetToggleListeners();
    initAudioPlayers();
}

// Inicializar reproductores de audio
let currentAudio = null;

function initAudioPlayers() {
    const buttons = document.querySelectorAll('.play-pause-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const audioUrl = btn.dataset.audio;
            
            // Si hay un audio reproduciéndose, pausarlo
            if (currentAudio && !currentAudio.paused) {
                currentAudio.pause();
                document.querySelectorAll('.play-pause-btn').forEach(b => b.textContent = '▶');
            }
            
            // Si es el mismo audio, solo pausar/reanudar
            if (currentAudio && currentAudio.src === audioUrl) {
                if (currentAudio.paused) {
                    currentAudio.play();
                    btn.textContent = '⏸';
                } else {
                    currentAudio.pause();
                    btn.textContent = '▶';
                }
            } else {
                // Crear nuevo audio
                currentAudio = new Audio(audioUrl);
                currentAudio.play();
                btn.textContent = '⏸';
                
                // Actualizar tiempo
                const timeDisplay = btn.parentElement.querySelector('.audio-time');
                currentAudio.addEventListener('timeupdate', () => {
                    const minutes = Math.floor(currentAudio.currentTime / 60);
                    const seconds = Math.floor(currentAudio.currentTime % 60);
                    timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                });
                
                // Cuando termine
                currentAudio.addEventListener('ended', () => {
                    btn.textContent = '▶';
                    timeDisplay.textContent = '0:00';
                });
            }
        });
    });
}

async function loadFromAPI() {
    try {
        console.log('Searching ITF tournament results...');
        
        // Probar primero con type ITF
        for (const tourId of ITF_TOURNAMENT_IDS) {
            try {
                const url = `https://tennis-api-atp-wta-itf.p.rapidapi.com/tennis/v2/itf/tournament/results/${tourId}`;
                
                console.log(`Trying ITF tournament ${tourId}`);
                
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        "x-rapidapi-host": "tennis-api-atp-wta-itf.p.rapidapi.com",
                        "x-rapidapi-key": API_KEY
                    }
                });
                
                if (response.ok) {
                    const result = await response.json();
                    
                    if (result && result.data && result.data.singles && result.data.singles.length > 0) {
                        console.log(`✓ Found ${result.data.singles.length} ITF matches in tournament ${tourId}`);
                        processAPIData(result.data.singles);
                        return;
                    }
                }
            } catch (error) {
                // Continuar probando
            }
        }
        
        console.log('No ITF results found, using static data');
        displayStaticData();
        
    } catch (error) {
        console.error('Error loading tennis data:', error);
        displayStaticData();
    }
}

function processAPIData(matches) {
    console.log('Processing matches:', matches);
    
    // Función para parsear el resultado "6-4 7-6(3) 6-2" en arrays
    function parseResult(resultStr) {
        if (!resultStr) return [['-', '-', '-'], ['-', '-', '-']];
        
        const sets = resultStr.split(' ').slice(0, 3); // Máximo 3 sets
        const player1Scores = [];
        const player2Scores = [];
        
        sets.forEach(set => {
            const scores = set.split('-');
            player1Scores.push(scores[0] || '-');
            player2Scores.push(scores[1] ? scores[1].split('(')[0] : '-'); // Quitar tie-break
        });
        
        // Rellenar con '-' si faltan sets
        while (player1Scores.length < 3) player1Scores.push('-');
        while (player2Scores.length < 3) player2Scores.push('-');
        
        return [player1Scores, player2Scores];
    }
    
    // Widget 1 - Primer partido completo
    if (matches.length >= 1) {
        const match = matches[0];
        const [score1, score2] = parseResult(match.result);
        
        document.getElementById('tournament-1-name').textContent = 'RECENT MATCH';
        document.getElementById('tournament-1-matches').innerHTML = `
            <div class="match-row">
                <div class="player-name">${(match.player1?.name || 'Unknown').toUpperCase()}</div>
                <div class="match-score">
                    ${score1.map(s => `<span class="score-set">${s}</span>`).join('')}
                </div>
            </div>
            <div class="match-row">
                <div class="player-name">${(match.player2?.name || 'Unknown').toUpperCase()}</div>
                <div class="match-score">
                    ${score2.map(s => `<span class="score-set">${s}</span>`).join('')}
                </div>
            </div>
        `;
    }
    
    // Widget 2 - Segundo partido completo
    if (matches.length >= 2) {
        const match = matches[1];
        const [score1, score2] = parseResult(match.result);
        
        document.getElementById('tournament-2-name').textContent = 'ANOTHER MATCH';
        document.getElementById('tournament-2-matches').innerHTML = `
            <div class="match-row">
                <div class="player-name">${(match.player1?.name || 'Unknown').toUpperCase()}</div>
                <div class="match-score">
                    ${score1.map(s => `<span class="score-set">${s}</span>`).join('')}
                </div>
            </div>
            <div class="match-row">
                <div class="player-name">${(match.player2?.name || 'Unknown').toUpperCase()}</div>
                <div class="match-score">
                    ${score2.map(s => `<span class="score-set">${s}</span>`).join('')}
                </div>
            </div>
        `;
    } else {
        displayStaticData();
    }
}

async function loadExternalJSON() {
    try {
        console.log('Loading tournament data...');
        
        // Intentar API principal, con fallback automático
        const data = await fetchWithFallback(API_ENDPOINTS.tennis, FALLBACK_ENDPOINTS.tennis);
        console.log('Data loaded successfully:', data);
        
        // Mostrar los datos
        displayExternalData(data);
        
    } catch (error) {
        console.error('Error loading data:', error);
        console.log('Falling back to static data');
        displayStaticData();
    }
}

function displayExternalData(data) {
    console.log('displayExternalData called with:', data);
    
    const widgetsContainer = document.querySelector('.tennis-widgets');
    widgetsContainer.innerHTML = ''; // Limpiar widgets existentes
    
    // Crear widgets de torneos
    Object.keys(data).forEach(widgetKey => {
        const tournament = data[widgetKey];
        console.log(`Processing ${widgetKey}:`, tournament);
        
        // Si es un widget de audio, usar el widget fijo
        if (tournament && tournament.type === 'audio') {
            console.log('Setting up audio widget');
            setupAudioWidgetFromJSON(tournament);
            return;
        }
        
        // Si es un widget de torneo
        if (tournament && tournament.matches && tournament.matches.length > 0) {
            console.log('Creating tennis widget');
            const match = tournament.matches[0];
            
            // Determinar quién ganó comparando los scores
            const score1Total = match.score1.filter(s => s !== '-').reduce((sum, s) => sum + parseInt(s), 0);
            const score2Total = match.score2.filter(s => s !== '-').reduce((sum, s) => sum + parseInt(s), 0);
            
            const player1Won = score1Total > score2Total;
            const player2Won = score2Total > score1Total;
            
            const widgetHTML = `
                <div class="widget-card">
                    <div class="widget-header">${tournament.header || 'TOURNAMENT'}</div>
                    <div class="widget-title">${tournament.tournament || 'UNKNOWN'}</div>
                    <div class="widget-matches">
                        <div class="match-row ${player1Won ? 'winner' : 'loser'}">
                            <div class="player-name">${match.player1.toUpperCase()}</div>
                            <div class="match-score">
                                ${match.score1.map(s => `<span class="score-set">${s}</span>`).join('')}
                            </div>
                        </div>
                        <div class="match-row ${player2Won ? 'winner' : 'loser'}">
                            <div class="player-name">${match.player2.toUpperCase()}</div>
                            <div class="match-score">
                                ${match.score2.map(s => `<span class="score-set">${s}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            widgetsContainer.insertAdjacentHTML('beforeend', widgetHTML);
        }
    });
    
    console.log('Widgets created, adding toggle listeners');
    // Añadir event listeners a los widgets para colapsar/expandir
    addWidgetToggleListeners();
}

function setupAudioWidgetFromJSON(config) {
    const audioWidget = document.getElementById('audio-widget');
    const audioPlayer = document.getElementById('audio-player');
    const audioTitle = document.getElementById('audio-title');
    const playButton = document.getElementById('play-button');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const audioTime = document.getElementById('audio-time');
    
    if (!config.url) return;
    
    // Configurar audio
    audioPlayer.src = config.url;
    audioTitle.textContent = config.title || 'AUDIO';
    audioWidget.style.display = 'block';
    
    // Formatear tiempo
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    // Play/Pause
    playButton.onclick = (e) => {
        e.stopPropagation();
        if (audioPlayer.paused) {
            audioPlayer.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            audioPlayer.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    };
    
    // Actualizar tiempo
    audioPlayer.ontimeupdate = () => {
        const current = formatTime(audioPlayer.currentTime);
        const duration = formatTime(audioPlayer.duration || 0);
        audioTime.textContent = `${current} / ${duration}`;
    };
    
    // Reset al terminar
    audioPlayer.onended = () => {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    };
}

function addWidgetToggleListeners() {
    const widgets = document.querySelectorAll('.widget-card');
    widgets.forEach(widget => {
        widget.addEventListener('click', (e) => {
            e.stopPropagation(); // Evitar que se propague al body (cambio de imagen)
            widget.classList.toggle('collapsed');
        });
    });
}

// ========================================
// JUDE COMMENTS WIDGET
// ========================================
const JUDE_COMMENTS_URL = "https://raw.githubusercontent.com/judehale/tblc-assets/main/jude_comments.json";
let judeComments = [];
let judeTimeouts = []; // Array para guardar todos los timeouts

async function loadJudeComments() {
    try {
        console.log('Loading motivational messages...');
        
        // Intentar API principal, con fallback automático
        judeComments = await fetchWithFallback(API_ENDPOINTS.comments, FALLBACK_ENDPOINTS.comments);
        console.log('Messages loaded:', judeComments.length);
        startJudeCommentCycle();
        
    } catch (error) {
        console.error('Error loading messages:', error);
    }
}

function clearJudeTimeouts() {
    judeTimeouts.forEach(timeout => clearTimeout(timeout));
    judeTimeouts = [];
}

function positionJudeWidget() {
    const judeWidget = document.getElementById('jude-comment-widget');
    if (!judeWidget) return;
    
    const allWidgets = document.querySelectorAll('.tennis-widgets .widget-card');
    if (allWidgets.length === 0) return;
    
    const lastWidget = allWidgets[allWidgets.length - 1];
    const rect = lastWidget.getBoundingClientRect();
    
    judeWidget.style.top = `${rect.bottom + 5}px`;
}

function startJudeCommentCycle() {
    // Listener para clicks en widgets - usar transitionend para garantizar precisión
    document.querySelectorAll('.widget-card').forEach(card => {
        card.addEventListener('transitionend', () => {
            positionJudeWidget();
        });
        
        card.addEventListener('click', () => {
            // Reposicionar inmediatamente
            setTimeout(() => positionJudeWidget(), 10);
            // Y después de la transición completa (310ms para asegurar)
            setTimeout(() => positionJudeWidget(), 310);
        });
    });
    
    // Observar cuando se añaden nuevos widgets
    const observer = new MutationObserver(() => {
        document.querySelectorAll('.widget-card').forEach(card => {
            card.addEventListener('transitionend', () => positionJudeWidget());
            card.addEventListener('click', () => {
                setTimeout(() => positionJudeWidget(), 10);
                setTimeout(() => positionJudeWidget(), 310);
            });
        });
    });
    
    const container = document.querySelector('.tennis-widgets');
    if (container) {
        observer.observe(container, { childList: true });
    }
    
    // Mostrar primer comentario después de 5 segundos
    setTimeout(() => {
        showJudeComment();
    }, 5000);
}

function showJudeComment() {
    // Limpiar timeouts anteriores para evitar conflictos
    clearJudeTimeouts();
    
    const widget = document.getElementById('jude-comment-widget');
    const textEl = document.getElementById('jude-comment-text');
    
    // Fase 1: Mostrar "JUDE IS TYPING..."
    widget.classList.remove('showing');
    widget.classList.add('typing');
    widget.style.display = 'flex';
    textEl.textContent = 'JUDE IS TYPING...';
    textEl.classList.remove('marquee');
    
    // Posicionar inmediatamente cuando se muestra
    setTimeout(() => positionJudeWidget(), 10);
    
    // Fase 2: Después de 3 segundos, mostrar 3-4 comentarios aleatorios en marquee
    const timeout1 = setTimeout(() => {
        if (judeComments.length === 0) return;
        
        // Seleccionar 3-4 comentarios aleatorios
        const numComments = Math.floor(Math.random() * 2) + 3; // 3 o 4 comentarios
        const selectedComments = [];
        const usedIndices = new Set();
        
        while (selectedComments.length < numComments && selectedComments.length < judeComments.length) {
            const randomIndex = Math.floor(Math.random() * judeComments.length);
            if (!usedIndices.has(randomIndex)) {
                usedIndices.add(randomIndex);
                selectedComments.push(judeComments[randomIndex].text.toUpperCase());
            }
        }
        
        // Unir los comentarios con separador
        const combinedText = selectedComments.join('   •   ');
        
        widget.classList.remove('typing');
        widget.classList.add('showing');
        
        // Duplicar el texto para marquee continuo
        textEl.textContent = combinedText + '   •   ' + combinedText;
        textEl.classList.add('marquee');
        
        // Reposicionar por si acaso cambió el tamaño
        setTimeout(() => positionJudeWidget(), 10);
        
        // Fase 3: Después de 20 segundos, ocultar por 5 segundos
        const timeout2 = setTimeout(() => {
            widget.style.display = 'none';
            textEl.classList.remove('marquee');
            
            // Fase 4: Después de 5 segundos, repetir el ciclo
            const timeout3 = setTimeout(() => {
                showJudeComment();
            }, 5000); // 5 segundos oculto
            
            judeTimeouts.push(timeout3);
            
        }, 20000); // 20 segundos mostrando el marquee
        
        judeTimeouts.push(timeout2);
        
    }, 3000); // 3 segundos typing
    
    judeTimeouts.push(timeout1);
}

function showJudeComment() {
    const widget = document.getElementById('jude-comment-widget');
    const textEl = document.getElementById('jude-comment-text');
    
    // Fase 1: Mostrar "JUDE IS TYPING..."
    widget.classList.remove('showing');
    widget.classList.add('typing');
    widget.style.display = 'flex';
    textEl.textContent = 'JUDE IS TYPING...';
    textEl.classList.remove('marquee');
    
    // Posicionar inmediatamente cuando se muestra
    setTimeout(() => positionJudeWidget(), 10);
    
    // Fase 2: Después de 3 segundos, mostrar 3-4 comentarios aleatorios en marquee
    setTimeout(() => {
        if (judeComments.length === 0) return;
        
        // Seleccionar 3-4 comentarios aleatorios
        const numComments = Math.floor(Math.random() * 2) + 3; // 3 o 4 comentarios
        const selectedComments = [];
        const usedIndices = new Set();
        
        while (selectedComments.length < numComments && selectedComments.length < judeComments.length) {
            const randomIndex = Math.floor(Math.random() * judeComments.length);
            if (!usedIndices.has(randomIndex)) {
                usedIndices.add(randomIndex);
                selectedComments.push(judeComments[randomIndex].text.toUpperCase());
            }
        }
        
        // Unir los comentarios con separador
        const combinedText = selectedComments.join('   •   ');
        
        widget.classList.remove('typing');
        widget.classList.add('showing');
        
        // Duplicar el texto para marquee continuo
        textEl.textContent = combinedText + '   •   ' + combinedText;
        textEl.classList.add('marquee');
        
        // Reposicionar por si acaso cambió el tamaño
        setTimeout(() => positionJudeWidget(), 10);
        
        // Fase 3: Después de 20 segundos, ocultar por 5 segundos
        setTimeout(() => {
            widget.style.display = 'none';
            textEl.classList.remove('marquee');
            
            // Fase 4: Después de 5 segundos, repetir el ciclo
            setTimeout(() => {
                showJudeComment();
            }, 5000); // 5 segundos oculto
            
        }, 20000); // 20 segundos mostrando el marquee
        
    }, 3000); // 3 segundos typing
}

// Inicializar
if (USE_EXTERNAL_JSON) {
    loadExternalJSON();
} else if (USE_API) {
    loadFromAPI();
} else {
    displayStaticData();
}

// Inicializar widget de comentarios de Jude
loadJudeComments();

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playTypeSound() {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = 'sine'; // ← clave
  oscillator.frequency.setValueAtTime(900, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(
    600,
    audioContext.currentTime + 0.04
  );

  gainNode.gain.setValueAtTime(0.03, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + 0.04
  );

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.05);
