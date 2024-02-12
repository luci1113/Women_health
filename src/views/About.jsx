import { aboutSections } from '../data/aboutData';
import '../css/about.css';


function About() {

    return (
        <main id="main">
            <div className="about__hero">
                <h1 className="about__title">Helping Girls and Women to Prioritise Their Peroid Health</h1>
            </div>
            
            <div className="about__sections">
                { aboutSections.map((section) => {
                    return (
                        <div 
                            key={section.id} 
                            id={section.id}
                            className={`section__${section.id}`}
                        >
                            <h2 className="section__title">{section.title}</h2>
                            <p className="section__content">{section.content}</p>
                            
                        </div>
                    )                               
                })}
            </div>                 
        </main>
    );
}

export default About;