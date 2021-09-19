import { useState, useEffect } from "react";
import styled from "styled-components";

const BACKGROUND_DARK = "#b88bbf";

const Container = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
    background-color: #caa6cb;
`;

const QuoteBox = styled.div.attrs((props) => ({
    id: "quote-box",
}))`
    background: ${BACKGROUND_DARK};
    border: 4px solid white;
    width: 80%;
    max-width: 500px;
    padding: 2rem;
`;

const Quote = styled.p.attrs(() => ({
    id: "text",
}))`
    color: white;
    text-align: center;
    font-size: 1.25rem;
`;

const Author = styled(Quote).attrs(() => ({
    id: "author",
}))`
    text-align: right;
    font-weight: 300;
`;

const Controls = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.a`
    background: white;
    border: none;
    padding: 1rem;
    cursor: pointer;
    color: ${BACKGROUND_DARK};
    border-radius: 5px;
    text-decoration: none;
    font-family: inherit;
    font-size: 14px;
    line-height: 1;
`;

const App = () => {
    const [{ quote, author }, setQuote] = useState({ quote: null, author: null });

    async function updateQuote() {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        return setQuote({ quote: data.content, author: data.author });
    }

    useEffect(() => {
        updateQuote();
    }, []);

    return (
        <Container>
            <QuoteBox>
                <Quote>{quote}</Quote>
                <Author>—{author}</Author>
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
        </Container>
    );
};

export default App;
