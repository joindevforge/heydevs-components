
/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     fontFamily:{
      "Inter":['Inter', 'sans-serif']
     },
     backgroundImage:{
      "gradient-2":"linear-gradient(313deg,#4a158a,#844cfd)",
      "gradient-3":"linear-gradient(143deg,hsla(0,0%,100%,0),rgba(133,77,254,.11))",
      "gradient-6":"linear-gradient(313deg,#4a158a,#844cfd)",
      "gradient-7":"radial-gradient(116.43% 131.69% at -15.97% -17.2%,hsla(0,0%,100%,.6) 0,hsla(0,0%,100%,.2) 100%)"
     },
      colors:{
        "primary-7000":"#7000ff"
      }
    },
  },
  plugins: [],
};
