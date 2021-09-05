import Header from './header'
import Menu from './menu'
import Sidebar from './sidebar'
import Content from './content'
import Footer from './footer'
import H1 from './h1'
import H4 from './h4'
import Button from './button'
import { useState } from 'react'

function App () {
    const [artTitle, setArtTitle] = useState(articles[0].title)
    const [artContent, setArtContent] = useState(articles[0].content)
    return (
        <>
            <Header />
            <Menu />
            <div className="sb_content">
                <Sidebar>
                    <ul >
                        {articles.map((item, id) => (
                            <li key={id} className="sidebar">
                                <a  href={item.id}>{item.title}</a>
                            </li>
                        ))}
                    </ul>      
                </Sidebar>
                <Content>
                    <H1>{artTitle}</H1>
                    <H4>{artContent}</H4>
                    <Button kind="primary">Assistir</Button>
                    <Button kind="secondary">Voltar</Button>
                </Content>
                
            </div>
            <Footer />
        </>
    )
};

const articles = [
    {
        id: 1,
        title: 'Aula 1',
        content: 'Introdução ao React.js',
    },
    {
        id: 2,
        title: 'Aula 2',
        content: 'JSX e Virtual DOM',
    }
]




export default App;