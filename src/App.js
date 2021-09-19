import { useState, useEffect } from "react";
import styled from "styled-components";

const darkBackground = "#b88bbf";
const transitionTime = 500;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100vh;

    background-color: #caa6cb;
`;

const QuoteBox = styled.div`
    position: relative;

    width: 80%;
    min-width: 320px;
    max-width: 500px;
    margin-bottom: 2rem;
    padding: 2rem;
    border: 4px solid white;
    box-sizing: border-box;

    background: ${darkBackground};
`;

const Quote = styled.div`
    margin-bottom: 5rem;
    overflow-wrap: break-word;
`;

const Text = styled.p`
    font-size: ${(props) => (props.length > 220 ? "1.5rem" : "2rem")};
    color: white;
    text-align: center;

    transition: opacity ${transitionTime}ms;

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
    color: ${darkBackground};
    text-decoration: none;
    line-height: 1;

    transition: background 500ms;

    cursor: pointer;

    &:hover {
        background: #eee;
    }
`;

const Footer = styled.footer`
    color: white;

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

const App = () => {
    const [{ quote, author }, setQuote] = useState({ quote: "", author: "" });
    const [transitioning, setTransitioning] = useState(true);

    async function updateQuote() {
        setTransitioning(true);
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        setTimeout(() => {
            setQuote({ quote: data.content, author: data.author });
            setTransitioning(false);
        }, transitionTime);
    }

    useEffect(() => {
        updateQuote();
    }, []);

    return (
        <Container>
            <QuoteBox id="quote-box">
                <Quote>
                    <Text visible={!transitioning} length={quote.length} id="text">
                        {quote}
                    </Text>
                    <Author visible={!transitioning} id="author">
                        —{author}
                    </Author>
                </Quote>
                <Controls>
                    <Button
                        id="tweet-quote"
                        href={`https://www.twitter.com/intent/tweet?text=${`${quote} —${author}`}`}
                    >
                        <i className="bi bi-twitter"></i>
                    </Button>
                    <Button id="new-quote" as="button" onClick={updateQuote}>
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
    );
};

export default App;
