/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "16px"],
      base: ["16px", "19.5px"],
      lg: ["16px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["60px", "80px"],
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        'primary': "#171717",
        'secondary': "#FF9A00",
        "bg-color": "#F5F6FF",
        "footer-color": "#F5F6FF",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },

      screens: {
        sm: "640px",   // Small devices, such as mobile phones (default)
        md: "768px",   // Tablets (default)
        lg: "1024px",  // Large screens (default)
        xl: "1280px",  // Extra-large screens (default)
        wide: "1440px", // Your wide screen configuration (as per your original config)
      },
      backgroundImage: {
        'hero': "url('/src/assets/images/Mostpopular.png')", 
      },
    },
  },
  plugins: [],
};
