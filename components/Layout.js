import { Container } from "semantic-ui-react"

export default function Layout(props) {
    return (
        <div>
            <div style={{position: 'sticky'}}>
        </div>
            <main className="container">
            {props.children}
            </main>
        </div>
        
    )
}