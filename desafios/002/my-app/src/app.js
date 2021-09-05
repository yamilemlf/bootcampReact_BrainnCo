import Header from './header'
import Menu from './menu'
import Sidebar from './sidebar'
import Content from './content'
import Footer from './footer'
import H1 from './h1'
import H4 from './h4'
import Button from './button'

function App () {
    return (
        <>
            <Header />
            <Menu />
            <div className="sb_content">
                <Sidebar>
                    <ul >
                        {aulas.map((item, id) => (
                            <li key={id} className="sidebar">
                                <a  href={item.content}>{item.title}</a>
                            </li>
                        ))}
                    </ul>      
                </Sidebar>
                <Content>
                    <H1>Desafio nº 2</H1>
                    <H4>Segundo desafio do Bootcamp React</H4>
                    <Button kind="secondary">Enviar</Button>
                </Content>
                
            </div>
            <Footer />
        </>
    )
};

const aulas = [
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