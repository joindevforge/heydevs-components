
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
      "gradient-5":"linear-gradient(180deg,#6326fe,#6326fe);",
      "gradient-6":"linear-gradient(313deg,#4a158a,#844cfd)",
      "gradient-7":"radial-gradient(116.43% 131.69% at -15.97% -17.2%,hsla(0,0%,100%,.6) 0,hsla(0,0%,100%,.2) 100%)",
      "gradient-8":"linear-gradient(135deg,hsl(247deg 53% 45%) 0%,hsl(247deg 49% 47%) 8%,hsl(247deg 46% 49%) 17%,hsl(246deg 45% 51%) 25%,hsl(247deg 46% 54%) 33%,hsl(247deg 47% 57%) 42%,hsl(247deg 48% 61%) 50%,hsl(247deg 50% 63%) 58%,hsl(247deg 51% 65%) 67%,hsl(248deg 53% 67%) 75%,hsl(248deg 56% 71%) 83%,hsl(248deg 59% 75%) 92%,hsl(249deg 64% 78%) 100%)"
     },
      colors:{
        "primary-7000":"#7000ff"
      },
      screens:{
        lg:"1024px",
        "md":"768px",

      }
    },
  },
  plugins: [],
};
