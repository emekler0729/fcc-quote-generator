import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 100vh;

    background: ${(props) => props.theme.light};
    transition: background ${(props) => props.theme.transition * 2}ms;
    z-index: 1;
    overflow: hidden;
`;

const QuoteBox = styled.div`
    position: relative;

    width: 80%;
    min-width: 320px;
    max-width: 500px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 2rem;
    border: 4px solid white;
    box-sizing: border-box;

    background: ${(props) => props.theme.dark};
    transition: background ${(props) => props.theme.transition * 2}ms;

    &:before {
        z-index: -1;
        content: "";
        height: 130%;
        width: 3000%;
        border: 4px solid ${(props) => props.theme.dark};
        background: ${(props) => props.theme.dark};
        transition: background ${(props) => props.theme.transition * 2}ms,
            border-color ${(props) => props.theme.transition * 2}ms;

        position: absolute;
        top: calc(-30% - 4px);
        left: -4px;

        transform: rotate(45deg);
        transform-origin: bottom left;
    }

    &:after {
        z-index: -1;
        content: "";
        height: 55%;
        width: 3000%;
        border: 4px solid ${(props) => props.theme.dark};
        background: ${(props) => props.theme.dark};
        transition: background ${(props) => props.theme.transition * 2}ms,
            border-color ${(props) => props.theme.transition * 2}ms;

        position: absolute;
        top: -4px;
        left: calc(100% + 4px);

        transform: rotate(45deg);
        transform-origin: top left;
    }
`;

const Quote = styled.div`
    margin-bottom: 5rem;
    overflow-wrap: break-word;
`;

const Text = styled.p`
    font-size: ${(props) => (props.length > 174 ? "1.4rem" : "2rem")};
    color: white;
    text-align: center;

    transition: opacity ${(props) => props.theme.transition}ms;

    opacity: ${(props) => (props.visible ? "100%" : "0%")};
`;

const Author = styled(Text)`
    font-size: 1.5rem;
    font-weight: 300;
    text-align: right;
`;

const Controls = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.a`
    padding: 1rem;
    border: none;
    border-radius: 5px;

    background: white;

    font-family: inherit;
    font-size: 16px;
    font-weight: bold;

    color: ${(props) => props.theme.dark};

    text-decoration: none;
    line-height: 1;

    transition: background 500ms, color ${(props) => props.theme.transition * 2}ms;

    cursor: pointer;

    &:hover {
        background: #eee;
    }
`;

const Footer = styled.footer`
    color: white;
    // position: relative;
    // left: 80px;
    margin-right: 10%;
    margin-left: 160px;
    margin-bottom: 2rem;
    text-align: right;

    a,
    a:visited {
        font-weight: bold;
        color: white;
        text-decoration: none;

        transition: color 500ms;
    }

    a:hover {
        color: #eee;
    }
`;

const makeTheme = (color, transition) => ({
    color,
    light: `hsl(${color}, 26%, 72%)`,
    dark: `hsl(${color}, 26%, 65%)`,
    transition,
});

const transition = 600;
const initialColor = 270;

const App = () => {
    const [{ text, author }, setQuote] = useState({ text: "❝\n❝\n", author: "" });
    const [transitioning, setTransitioning] = useState(true);
    const [theme, setTheme] = useState(makeTheme(initialColor, transition));

    async function newQuote() {
        setTransitioning(true);

        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();

        setTimeout(() => {
            setQuote({ text: data.content, author: data.author });
            setTransitioning(false);
        }, transition);
    }

    function updateQuote() {
        setTheme(() => {
            let nextColor;
            do {
                nextColor = Math.floor(Math.random() * (360 / 30)) * 30;
            } while (nextColor === theme.color);

            return makeTheme(nextColor, transition);
        });
        newQuote();
    }

    useEffect(() => {
        newQuote();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <QuoteBox id="quote-box">
                    <Quote>
                        <Text visible={!transitioning} length={text.length} id="text">
                            {text}
                        </Text>
                        <Author visible={!transitioning} id="author">
                            —{author}
                        </Author>
                    </Quote>
                    <Controls>
                        <Button
                            id="tweet-quote"
                            href={`https://www.twitter.com/intent/tweet?text=${`${text} —${author}`}`}
                        >
                            <i className="bi bi-twitter"></i>
                        </Button>
                        <Button id="new-quote" as="button" onClick={updateQuote} disabled={transitioning}>
                            New Quote
                        </Button>
                    </Controls>
                </QuoteBox>
                <Footer>
                    Designed and developed by{" "}
                    <a href="https://www.eduard-mekler.com" target="_blank" rel="noreferrer">
                        Eduard Mekler
                    </a>
                </Footer>
            </Container>
        </ThemeProvider>
    );
};

export default App;
