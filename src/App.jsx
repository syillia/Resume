import { useEffect, useState } from "react";
import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";

function App() {
  const [start, setStart] = useState(false);
  const [typedName, setTypedName] = useState("");
  const [typedContacts, setTypedContacts] = useState("");
  const [typedSegments, setTypedSegments] = useState([]);
  const [typedAbout, setTypedAbout] = useState("");
  const [typedLanguages, setTypedLanguages] = useState("");

  const theme = useTheme();
  const is4K = useMediaQuery(theme.breakpoints.up(3840));
  const is2K = useMediaQuery(theme.breakpoints.between(2560, 3840));
  const isFullHD = useMediaQuery(theme.breakpoints.between(1440, 2560));
  const isLaptop = useMediaQuery(theme.breakpoints.between(900, 1440));
  const isTablet = useMediaQuery(theme.breakpoints.between(600, 900));
  const isMobile = useMediaQuery(theme.breakpoints.down(600));

  const nameText = "Illia Syrbu";

  const contactsText = `{
  "email": "kiberg805@gmail.com",
  "date of birth":
  "10/12/2004",
  "phone": "+491726243165",
  "address": "64295 Hessen, Darmstadt, Germany"
}`;

  const aboutText =
    "Hi! I'm Illia, an aspiring frontend developer passionate about creating clean, interactive web experiences. I enjoy turning ideas into functional interfaces and exploring how frontend, backend, and databases connect.";

  const languagesText = `languages = {
  "Deutsch": "B1",
  "English": "B1",
  "Ukrainian": "Native",
  "Russian": "Native",
  "Italian": "A1"
}`;

  const segments = [
    { text: "const ", color: "#66bbecff" },
    { text: "frontendSkills ", color: "#1da4f1ff" },
    { text: "=", color: "#d6d6d6ff" },
    { text: ' "React, JavaScript, HTML, CSS, MUI"', color: "#f1edaaff" },
    { text: "\n\n", color: null },

    { text: "const ", color: "#66bbecff" },
    { text: "backendSkills ", color: "#1da4f1ff" },
    { text: "=", color: "#d6d6d6ff" },
    { text: ' "Go, PostgreSQL, MySQL"', color: "#f1edaaff" },
    { text: "\n\n", color: null },

    { text: "const ", color: "#66bbecff" },
    { text: "tools ", color: "#1da4f1ff" },
    { text: "=", color: "#d6d6d6ff" },
    { text: ' "Photoshop, Illustrator, GitHub, Git"', color: "#f1edaaff" },
    { text: "\n\n", color: null },

    { text: "let ", color: "#66bbecff" },
    { text: "projects ", color: "#1da4f1ff" },
    { text: "=", color: "#d6d6d6ff" },
    { text: "\n\n", color: null },
    {
      text: `{
  name: "Leer",
  description: "Full-stack social network",
  tools: ["Go", "React", "TypeScript"],
  link: "github.com/leer-app/leer"
},
{
  name: "ToDoList",
  description: "Simple todo app",
  tools: ["React", "TypeScript"],
  link: "github.com/yourusername/todolist"
}`,
      color: "#aad1f1ff",
    },
  ];

  // Responsive sizes
  const getResponsiveSize = () => {
    if (is4K)
      return {
        fontSize: { name: 56, contact: 28, about: 34, code: 28, header: 30 },
        spacing: { m: 4, gap: 5 },
        height: { name: 200, contact: "auto", about: "auto", lang: "auto" },
      };
    if (is2K)
      return {
        fontSize: { name: 48, contact: 24, about: 28, code: 24, header: 26 },
        spacing: { m: 3, gap: 4 },
        height: { name: 180, contact: "auto", about: "auto", lang: "auto" },
      };
    if (isFullHD)
      return {
        fontSize: { name: 60, contact: 20, about: 24, code: 20, header: 24 },
        spacing: { m: 2.5, gap: 3 },
        height: { name: 140, contact: "auto", about: "auto", lang: "auto" },
      };
    if (isLaptop)
      return {
        fontSize: { name: 32, contact: 18, about: 20, code: 18, header: 22 },
        spacing: { m: 2, gap: 2 },
        height: { name: 140, contact: "auto", about: "auto", lang: "auto" },
      };
    if (isTablet)
      return {
        fontSize: { name: 28, contact: 16, about: 18, code: 16, header: 20 },
        spacing: { m: 2, gap: 2 },
        height: { name: 120, contact: "auto", about: "auto", lang: "auto" },
      };
    return {
      fontSize: { name: 44, contact: 20, about: 20, code: 15, header: 18 },
      spacing: { m: 1.5, gap: 1.5 },
      height: { name: 100, contact: "auto", about: "auto", lang: "auto" },
    };
  };

  const sizes = getResponsiveSize();

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Typing effect for name
  useEffect(() => {
    if (!start) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index < nameText.length) {
        setTypedName(nameText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [start]);

  // Typing effect for contacts
  useEffect(() => {
    if (!start) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index < contactsText.length) {
        setTypedContacts(contactsText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [start]);

  // Typing effect for code segments
  useEffect(() => {
    if (!start) return;
    const interval = setInterval(() => {
      setTypedSegments((prev) => {
        let newSegments = [...prev];
        let segIndex = newSegments.length - 1;
        let charIndex = 0;

        if (segIndex < 0) {
          segIndex = 0;
        } else {
          charIndex = newSegments[segIndex].text.length;
        }

        if (charIndex >= segments[segIndex].text.length) {
          segIndex++;
          charIndex = 0;
        }

        if (segIndex >= segments.length) {
          clearInterval(interval);
          return newSegments;
        }

        const currentSegment = segments[segIndex];
        const nextChar = currentSegment.text[charIndex];

        if (newSegments[segIndex]) {
          newSegments[segIndex] = {
            text: newSegments[segIndex].text + nextChar,
            color: currentSegment.color,
          };
        } else {
          newSegments.push({ text: nextChar, color: currentSegment.color });
        }

        return newSegments;
      });
    }, 15);
    return () => clearInterval(interval);
  }, [start]);

  // Typing effect for about
  useEffect(() => {
    if (!start) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index < aboutText.length) {
        setTypedAbout(aboutText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [start]);

  // Typing effect for languages
  useEffect(() => {
    if (!start) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index < languagesText.length) {
        setTypedLanguages(languagesText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [start]);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#0f1014",
        p: { xs: 1.5, sm: 2, md: 3 },
        boxSizing: "border-box",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: { xs: 1.5, sm: 2, md: sizes.spacing.gap },
          width: "100%",
        }}
      >
        {/* Name Card */}
        <Paper
          sx={{
            backgroundColor: "#0e0f13",
            borderRadius: "15px",
            animation: "slideInLeft 1s ease-out",
            gridColumn: { xs: "1", md: "1", lg: "1" },
            "@keyframes slideInLeft": {
              from: { opacity: 0, transform: "translateX(-50px)" },
              to: { opacity: 1, transform: "translateX(0)" },
            },
          }}
        >
          <Paper
            sx={{
              width: "100%",
              height: "50px",
              backgroundColor: "#171a20",
              borderRadius: "15px 15px 0 0",
              color: "#70bbccd0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ fontSize: sizes.fontSize.header, fontFamily: "monospace" }}
            >
              Name.js
            </Typography>
          </Paper>
          <Box
            sx={{
              p: sizes.spacing.m,
              minHeight: sizes.height.name,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: sizes.fontSize.name,
                fontFamily: "Fira Code, monospace",
                color: "#bababa",
              }}
            >
              {typedName}
              {typedName.length < nameText.length && <span>|</span>}
            </Typography>
          </Box>
        </Paper>

        {/* Contacts Card */}
        <Paper
          sx={{
            backgroundColor: "#0e0f13",
            borderRadius: "15px",
            animation: "slideInLeft 1s ease-out 0.2s both",
            gridColumn: { xs: "1", md: "1" },
            "@keyframes slideInLeft": {
              from: { opacity: 0, transform: "translateX(-50px)" },
              to: { opacity: 1, transform: "translateX(0)" },
            },
          }}
        >
          <Paper
            sx={{
              width: "100%",
              height: "50px",
              backgroundColor: "#171a20",
              borderRadius: "15px 15px 0 0",
              color: "#70bbccd0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ fontSize: sizes.fontSize.header, fontFamily: "monospace" }}
            >
              Contacts.json
            </Typography>
          </Paper>
          <Box sx={{ p: sizes.spacing.m }}>
            <Typography
              sx={{
                fontSize: sizes.fontSize.contact,
                fontFamily: "Fira Code, monospace",
                color: "#8ade96",
                whiteSpace: "pre-line",
                wordBreak: "break-word",
              }}
            >
              {typedContacts}
              {typedContacts.length < contactsText.length && <span>|</span>}
            </Typography>
          </Box>
        </Paper>

        {/* About Me Card - spans 2 columns on larger screens */}
        <Paper
          sx={{
            backgroundColor: "#0e0f13",
            borderRadius: "15px",
            animation: "slideInUp 1s ease-out 0.4s both",
            gridColumn: { xs: "1", md: "2", lg: "2 / 4" },
            gridRow: { xs: "auto", lg: "1 / 3" },
            "@keyframes slideInUp": {
              from: { opacity: 0, transform: "translateY(50px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <Paper
            sx={{
              width: "100%",
              height: "50px",
              backgroundColor: "#171a20",
              borderRadius: "15px 15px 0 0",
              color: "#70bbccd0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ fontSize: sizes.fontSize.header, fontFamily: "monospace" }}
            >
              AboutMe.css
            </Typography>
          </Paper>
          <Box sx={{ p: sizes.spacing.m }}>
            <Typography
              sx={{
                fontSize: sizes.fontSize.code,
                fontFamily: "Fira Code, monospace",
                color: "#8ade96",
                whiteSpace: "pre-line",
                textAlign: "left",
              }}
            >
              {typedSegments.map((seg, i) => (
                <span key={i} style={{ color: seg.color || "#d8d8d8ff" }}>
                  {seg.text}
                </span>
              ))}
              {typedSegments.length < segments.length && (
                <span style={{ color: "#d8d8d8ff" }}>|</span>
              )}
            </Typography>
          </Box>
        </Paper>

        {/* Info Card */}
        <Paper
          sx={{
            backgroundColor: "#0e0f13",
            borderRadius: "15px",
            animation: "slideInRight 1s ease-out 0.6s both",
            gridRow:{ xs: "4", md: "1", lg: "3" }, 
            gridColumn: { xs: "1", md: "2", lg: "2 / 4" },
            "@keyframes slideInRight": {
              from: { opacity: 0, transform: "translateX(50px)" },
              to: { opacity: 1, transform: "translateX(0)" },
            },
          }}
        >
          <Paper
            sx={{
              width: "100%",
              height: "50px",
              backgroundColor: "#171a20",
              borderRadius: "15px 15px 0 0",
              color: "#70bbccd0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ fontSize: sizes.fontSize.header, fontFamily: "monospace" }}
            >
              info.css
            </Typography>
          </Paper>
          <Box sx={{ p: sizes.spacing.m }}>
            <Typography
              sx={{
                fontSize: sizes.fontSize.about,
                fontFamily: "Fira Code, monospace",
                color: "#d6c493ff",
                textAlign: "left",
              }}
            >
              {typedAbout}
              {typedAbout.length < aboutText.length && <span>|</span>}
            </Typography>
          </Box>
        </Paper>

        {/* Languages Card */}
        <Paper
          sx={{
            backgroundColor: "#0e0f13",
            borderRadius: "15px",
            animation: "slideInRight 1s ease-out 0.8s both",
            gridColumn: { xs: "1", md: "1", lg: "1" },
            "@keyframes slideInRight": {
              from: { opacity: 0, transform: "translateX(50px)" },
              to: { opacity: 1, transform: "translateX(0)" },
            },
          }}
        >
          <Paper
            sx={{
              width: "100%",
              height: "50px",
              backgroundColor: "#171a20",
              borderRadius: "15px 15px 0 0",
              color: "#70bbccd0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ fontSize: sizes.fontSize.header, fontFamily: "monospace" }}
            >
              languages.css
            </Typography>
          </Paper>
          <Box sx={{ p: sizes.spacing.m }}>
            <Typography
              sx={{
                fontSize: sizes.fontSize.about,
                fontFamily: "Fira Code, monospace",
                color: "#d6c493ff",
                textAlign: "left",
                whiteSpace: "pre-line",
              }}
            >
              {typedLanguages}
              {typedLanguages.length < languagesText.length && <span>|</span>}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default App;
