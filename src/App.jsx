import { useEffect, useState } from "react";
import "./App.css";
import { Box, Paper, Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";

function App() {
  const [start, setStart] = useState(false);

  const [typedContacts, setTypedContacts] = useState("");

  const [typedSegments, setTypedSegments] = useState([]);

  const [TypedInfo, setTypedInfo] = useState([]);

  const contactsText = `{

  "email": "kiberg805@gmail.com",

  "phone": "+491726243165",

  "address": "64295 Hessen, Darmsatdt, Germany"

}`;

  const languages = [
    { text: "let ", color: "#66bbecff" },
    { text: "languages ", color: "#1da4f1ff" },
    { text: "=", color: "#d6d6d6ff" },
    { text: "\n\n", color: null },
    {
      text: ` {

  "Deutsch": "B1",

  "English": "B1",

  "Ukrainian": "Native speaker",

  "Russian": "Native speaker",

  "Italian": "A1",

}`,
    },
  ];

  const segments = [
    { text: "const ", color: "#66bbecff" },
    { text: "frontendSkills ", color: "#1da4f1ff" },
    { text: "=", color: "#d6d6d6ff" },
    { text: ' "React, JavaScript, HTML, CSS, MUI"', color: "#f1edaaff" },
    { text: "\n", color: null },

    { text: "const ", color: "#66bbecff" },
    { text: "backendSkills ", color: "#1da4f1ff" },
    { text: "=", color: "#d6d6d6ff" },
    { text: ' "Go, PostgreSQL, MySQL"', color: "#f1edaaff" },
    { text: "\n", color: null },

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
      text: ` {

    name: "Leer",
    description: "A full-stack social network built with React and Go.",
    tools: ["Go", "React", "TypeScript", "Git", "GitHub"],
    link: "https://github.com/leer-app/leer"

  },
  {

    name: "ToDoList",
    description: "A simple todo app with React and TypeScript.",
    tools: ["React", "TypeScript"],
    link: "https://github.com/yourusername/todolist"

  }`,
      color: "#aad1f1ff",
    },
    { text: "\n\n", color: null },
    { text: "let ", color: "#66bbecff" },
    { text: "languages ", color: "#1da4f1ff" },
    { text: "=", color: "#d6d6d6ff" },
    { text: "\n\n", color: null },
    {
      text: ` {

  "Deutsch": "B1",

  "English": "B1",

  "Ukrainian": "Native speaker",

  "Russian": "Native speaker",

  "Italian": "A1",

}`,
      color: "#aad1f1ff",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!start) return;

    const interval = setInterval(() => {
      setTypedContacts((prev) => {
        if (prev.length >= contactsText.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + contactsText[prev.length];
      });
    }, 40);

    return () => clearInterval(interval);
  }, [start, contactsText]);

  useEffect(() => {
    if (!start) return;

    const interval = setInterval(() => {
      setTypedSegments((prev) => {
        let newSegments = [...prev];

        // Находим текущий сегмент
        let segIndex = newSegments.length - 1;
        let charIndex = 0;

        if (segIndex < 0) {
          segIndex = 0;
        } else {
          charIndex = newSegments[segIndex].text.length;
        }

        // Если сегмент закончен, идем к следующему
        if (charIndex >= segments[segIndex].text.length) {
          segIndex++;
          charIndex = 0;
        }

        // Если все сегменты напечатаны, очищаем интервал
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

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#0f1014",
          p: 3,
          boxSizing: "border-box",
          overflow: "auto",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 5,
            height: "100%",
            width: "100%",
            position: "relative",
          }}
        >
          <Paper
            sx={{
              width: "100%",
              height: "1950px",
              borderRadius: "25px",
              backgroundColor: "#121418",
              color: "#6ece83fe",
            }}
          >
            <Box sx={{ display: "flex", gap: 10 }}>
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Paper
                    sx={{
                      width: { xs: "93%", sm: "47%", md: "24%", lg: "37%" },
                      height: "200px",
                      backgroundColor: "#0e0f13",
                      animation: "slideInLeft 1s ease-out",
                      borderRadius: "15px",
                      m: 3,
                      zIndex: 1,
                      color: "#bababa",
                    }}
                  >
                    <Paper
                      sx={{
                        width: "100%",
                        height: "61px",
                        backgroundColor: "#171a20",
                        borderRadius: "15px 15px 0 0",
                        zIndex: 2,
                        color: "#70bbccd0",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        display: "flex",
                      }}
                    >
                      <Typography
                        sx={{ fontSize: 30, fontFamily: "monospace" }}
                      >
                        Name.js
                      </Typography>
                    </Paper>
                    <Typography
                      sx={{ fontSize: 56, fontFamily: "Fira Code", mt: 3 }}
                    >
                      {start && (
                        <Typewriter
                          words={["Illia Syrbu"]}
                          loop={1}
                          typeSpeed={100}
                          deleteSpeed={0}
                        />
                      )}
                    </Typography>
                  </Paper>
                  <Paper
                    sx={{
                      width: { xs: "93%", sm: "47%", md: "24%", lg: "37%" },
                      height: "900px",
                      backgroundColor: "#0e0f13",
                      animation: "slideInLeft 1s ease-out",
                      borderRadius: "15px",
                      m: 3,
                      zIndex: 1,
                      color: "#8ade96",
                    }}
                  >
                    <Paper
                      sx={{
                        width: "100%",
                        height: "61px",
                        backgroundColor: "#171a20",
                        borderRadius: "15px 15px 0 0",
                        zIndex: 2,
                        color: "#70bbccd0",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        display: "flex",
                      }}
                    >
                      <Typography
                        sx={{ fontSize: 30, fontFamily: "monospace" }}
                      >
                        Contacts.json
                      </Typography>
                    </Paper>
                    <Typography
                      sx={{
                        fontSize: 56,
                        fontFamily: "Fira Code",
                        mt: 3,
                        color: "#bababa",
                      }}
                    >
                      {start && (
                        <Typewriter
                          words={["Contacts"]}
                          loop={1}
                          typeSpeed={100}
                          deleteSpeed={0}
                        />
                      )}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 28,
                        fontFamily: "Fira Code",
                        textAlign: "left",
                        m: 4,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {typedContacts}
                      {/* Курсор */}
                      {typedContacts.length < contactsText.length && (
                        <span
                          style={{ display: "inline-block", width: "10px" }}
                        ></span>
                      )}
                    </Typography>
                  </Paper>
                </Box>
                <Paper
                  sx={{
                    width: { xs: "20%", sm: "20%", md: "45%", lg: "53%" },
                    height: "153%",
                    backgroundColor: "#0e0f13",
                    animation: "slideInUp 1s ease-out",
                    borderRadius: "15px",
                    m: 3,
                    position: "absolute",
                    zIndex: 1,
                    left: "500px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Paper
                    sx={{
                      width: "100%",
                      height: "61px",
                      backgroundColor: "#171a20",
                      borderRadius: "15px 15px 0 0",
                      zIndex: 2,
                      left: "500px",
                      color: "#70bbccd0",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      display: "flex",
                    }}
                  >
                    <Typography sx={{ fontSize: 30, fontFamily: "monospace" }}>
                      AboutMe.css
                    </Typography>
                  </Paper>
                  <Typography
                    sx={{
                      fontSize: 50,
                      fontFamily: "monospace",
                      color: "#bababa",
                      mt: 3,
                    }}
                  >
                    About me
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 28,
                      fontFamily: "Fira Code",
                      textAlign: "left",
                      m: 10,
                      whiteSpace: "pre-line",
                      color: "#8ade96",
                    }}
                  >
                    {typedSegments.map((seg, i) => (
                      <span key={i} style={{ color: seg.color || "#d8d8d8ff" }}>
                        {seg.text}
                      </span>
                    ))}
                    {/* курсор */}
                    {typedSegments.length < segments.length && (
                      <span
                        style={{
                          display: "inline-block",
                          width: "10px",
                          color: "#d8d8d8ff",
                        }}
                      >
                        |
                      </span>
                    )}
                  </Typography>
                </Paper>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Paper
                    sx={{
                      width: { xs: "90%", sm: "45%", md: "24%", lg: "23%" },
                      height: "60%",
                      backgroundColor: "#0e0f13",
                      animation: "slideInRight 1s ease-out",
                      borderRadius: "15px",
                      m: 3,
                      position: "absolute",
                      zIndex: 1,
                      right: "0px",
                    }}
                  >
                    <Paper
                      sx={{
                        width: "100%",
                        height: "61px",
                        backgroundColor: "#171a20",
                        borderRadius: "15px 15px 0 0",
                        zIndex: 2,
                        right: "0px",
                        color: "#70bbccd0",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        display: "flex",
                      }}
                    >
                      <Typography
                        sx={{ fontSize: 30, fontFamily: "monospace" }}
                      >
                        info.css
                      </Typography>
                    </Paper>
                    <Typography
                      sx={{
                        fontSize: 34,
                        fontFamily: "Fira Code",
                        m: 5,
                        color: "#d6c493ff",
                        textAlign: "left",
                      }}
                    >
                      {start && (
                        <Typewriter
                          words={[
                            "Hi! I’m Illia, an aspiring frontend developer passionate about creating clean, interactive web experiences. I enjoy turning ideas into functional interfaces and exploring how frontend, backend, and databases connect.",
                          ]}
                          loop={1}
                          typeSpeed={30}
                          deleteSpeed={0}
                        />
                      )}
                    </Typography>
                    <Paper
                      sx={{
                        width: { xs: "90%", sm: "45%", md: "24%", lg: "100%" },
                        height: "70%",
                        backgroundColor: "#0e0f13",
                        animation: "slideInRight 1s ease-out",
                        borderRadius: "15px",
                        mt: 13, // Используем отступ сверху вместо абсолютного позиционирования
                        zIndex: 1,
                        right: "0px",
                        position: "relative", // Изменяем на relative
                      }}
                    >
                      <Paper
                        sx={{
                          width: "100%",
                          height: "61px",
                          backgroundColor: "#171a20",
                          borderRadius: "15px 15px 0 0",
                          zIndex: 2,
                          color: "#70bbccd0",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          display: "flex",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: 30, fontFamily: "monospace" }}
                        >
                          languages.css
                        </Typography>
                      </Paper>
                      <Typography
                        sx={{
                          fontSize: 34,
                          fontFamily: "Fira Code",
                          m: 5,
                          color: "#d6c493ff",
                          textAlign: "left",
                        }}
                      >
                        {start && (
                          <Typewriter
                            words={[
                              `languages = {
            "Deutsch": "B1",
            "English": "B1",
            "Ukrainian": "Native speaker",
            "Russian": "Native speaker",
            "Italian": "A1"
          }`,
                            ]}
                            loop={1}
                            typeSpeed={30}
                            deleteSpeed={0}
                          />
                        )}
                      </Typography>
                    </Paper>
                  </Paper>
                </Box>
              </>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default App;
