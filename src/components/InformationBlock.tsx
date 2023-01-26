type InformationBlockProps = {
    header: string;
    link: string;
    subheader?: string;
    bulletpoints: Array<string>;
    skills: string;
}

export const InformationBlock = ({header, link, subheader, bulletpoints, skills}: InformationBlockProps) => {

    return (
        <div className='App-infoBlock'>
            <p className='App-blockHeader'><a className='App-blockHeaderLink' href={link} target="_blank" rel="noreferrer">{header}</a></p>
            <p className='App-blockSubheader'>{subheader}</p>
            { bulletpoints.map((bulletpoint) => 
                <p className='App-bulletpoint'>{bulletpoint}</p>
            )
            }
            <p className='App-blockSkills'>{skills}</p>
          </div>
    )
}