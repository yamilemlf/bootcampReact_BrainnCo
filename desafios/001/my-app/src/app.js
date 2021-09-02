import Header from './Header'
import Menu from './Menu'
import Sidebar from './Sidebar'
import Content from './Content'
import Footer from './Footer'
import H1 from './H1'
import H4 from './H4'
import Button from './Button'

function App () {
    return (
        <>
            <Header />
            <Menu />
            <div className="sb_content">
                <Sidebar />
                <Content>
                    <H1>Desafio nº 1</H1>
                    <H4>Primeiro desafio do Bootcamp React</H4>
                    <Button kind="secondary">Enviar</Button>
                </Content>
                
            </div>
            <Footer />
        </>
    )
};

export default App;