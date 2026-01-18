const backgroundColor = 'rgba(43, 47, 51, 1)'

export const heroStyles = {

hero: {
  padding: '3rem 0.5rem',
  background: backgroundColor,
  color: '#fff',
},

h1: {
  fontSize: '2.5rem',
  fontWeight: '700',
  fontFamily: 'Montserrat',
},

h3: {
  fontSize: '1.3rem',
  fontWeight: '700',
  fontFamily: 'Montserrat',
  textAlign: 'left',
},

blue: {
  color: 'rgba(103, 199, 235, 1)',
},

yellow: {
  color: 'rgba(251, 202, 3, 1)'
},

button: {
  border: 'none',
  background: 'transparent',
  color: 'rgba(106, 12, 11, 1)',
  cursor: 'pointer',
  fontFamily: 'Montserrat',
  fontSize: '1rem'
},

p: {
    fontFamily: 'Open Sans',
    fontSize: '1rem',
      margin: '0px'
},

stats: {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '1.5rem',
  marginTop: '60px'
},

statCard: {
  background: backgroundColor,
  padding: '24px',
  borderRadius: '12px',
  textAlign: 'center',
  transition: ' transform 0,2s ease, box-shadow 0.2s ease',
  boxShadow:
  '12px 12px 24px rgba(0, 0, 0, 0.55), -12px -12px 24px rgba(22, 21, 21, 0.06)',
},

h3: {
  fontFamily: 'Open Sans',
  color: '#ffff',
  margin: '0',
  fontSize: '1.7rem'
},

left: {
  textAlign: 'center'
},

img: {
  width: '100%',
  height: '100vh',
  objectFit: 'cover',
  display: 'block',
  borderRadius: '10px'
},

logo: { 
  display: 'flex', 
  alignItems: 'center', 
  gap: '3rem',
},

log1: {
  alignItems: 'left',
  width: '500px',
  height: 'auto',
  padding: '10px'
},

center: {
  textAlign: 'center'
},

statIcon: {
  width: "1.8rem",   // Changed from fontSize
  height: "1.8rem",  // Changed from fontSize
  marginBottom: "6px",
  opacity: 0.9,
  display: "block",  // Helps with alignment
},

vertical: {
  padding: '5px',
  borderRadius: '30px',
  height: '550px',
  width: '400px',
},

quoteRow: {
  display: "flex",
  alignItems: "flex-start",
  gap: "1.5rem",
},

quoteVert: {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '30px',
  maxWidth: '500px'
},

bottom: {
  marginBottom: '80px',
  marginTop: '50px',
},

  nav: {
  position: "fixed",
  top: 0,
  left: 0,       // start at the left of viewport
  right: 0,      // end at the right of viewport
  margin: "0 auto",
  width: "100%",
  color: "white",
  display: "flex",
  justifyContent: "flex-end", // aligns all items to the right
  textAlign: "right",
  background: "rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(10px)",
  zIndex: 1000,
  padding: "15px 25px",
  boxSizing: "border-box",
  boxShadow: "0 2px 10px rgba(141, 139, 139, 0.5)",
  borderBottom: "2px solid #333",
  },

  ul: {
    listStyle: "none",
    display: "flex",
    gap: "1.5rem",
    margin: 0,
    padding: 0,
    flexWrap: "wrap"
  },

  link: {
    textDecoration: "none",
    fontFamily: "Open Sans",
    color: "#FBCA03",
    fontWeight: 500,
    position: "relative",
    transition: "all 0.3s ease",
  },

  activeLink: {
    color: "#AA0505",
  },

  underline: {
    position: "absolute",
    bottom: "-4px",
    left: 0,
    height: "2px",
    width: "0%",
    backgroundColor: "#AA0505",
    transition: "width 0.3s ease",
  },

  underlineActive: {
    width: "100%",
  },

  carImg: {
    width: "500px",
    height: "300px",
  },


  card: {
    display: "grid",
    gridTemplateColumns: "120px 1fr",
    gap: "12px",
    background: "#111",
    borderRadius: "12px",
    padding: "10px",
    marginBottom: "16px",
    maxWidth: "500px", 
    alignItems: "center",
    boxShadow:
  '12px 12px 24px rgba(0, 0, 0, 0.55), -12px -12px 24px rgba(255, 255, 255, 0.06)',
  },

  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",

  },

  textCol: {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "8px",
  },


  blueBox: {
    background: "#67C7EB",
    color: "#000",
    padding: "8px",
    borderRadius: "6px",
    fontSize: "0.85rem",
    
  },

  redBox: {
    background: "#AA0505",
    color: "#000",
    padding: "8px",
    borderRadius: "6px",
    fontSize: "0.85rem",
  },

  cardGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
  gap: "16px",
},

black: {
  color: "#000"
},

cards: {
   display: "grid",
    gap: "12px",
    background: backgroundColor,
    borderRadius: "12px",
    padding: "10px",
    maxWidth: "500px", 
    border: "2px solid black",
        boxShadow:
  '12px 12px 24px rgba(90, 77, 77, 0.55), -12px -12px 24px rgba(233, 35, 35, 0.06)',
  },

  grey: {
    color: "#1e1e1e"
  },

  rowSlider: {
  display: "flex",
  gap: "20px",
  overflowX: "auto",
  scrollSnapType: "x mandatory",
  paddingBottom: "10px",
},

slideImage: {
  flex: "0 0 auto",
  width: "350px",
  height: "550px",
  objectFit: "cover",
  borderRadius: "12px",
  scrollSnapAlign: "start",
          boxShadow:
  '12px 12px 24px rgba(90, 77, 77, 0.55), -12px -12px 24px rgba(233, 35, 35, 0.06)',
},

horSlide: {
  display: "flex",
  flexDirection: "row",     
  gap: "20px",
  overflowX: "auto",         
  overflowY: "hidden",
  padding: "16px",
  scrollSnapType: "x mandatory",
},

horCard: {
  minWidth: "420px",
  flexShrink: 0,
  borderRadius: "12px",
  background: "#B97D10",
  padding: "20px"
},

cardImg: {
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  objectFit: "cover",
},

ctaText: {
  color: "#e5e5e5",
  fontSize: "14px",
  lineHeight: "1.4",
  maxWidth: "320px",
},

ctaButton: {
  backgroundColor: "#AA0505",
  color: "#fff",
  border: "none",
  padding: "10px 18px",
  borderRadius: "999px",
  fontSize: "14px",
  cursor: "pointer",
  whiteSpace: "nowrap",
},

ctaRow: {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  padding: "20px",
  backgroundColor: "#2b2f33",
  borderRadius: "12px",
  maxWidth: "520px",
},


}

