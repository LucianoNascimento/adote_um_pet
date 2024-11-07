import './section.css'

function SectionComponent () {
    return (
        <div className='containerSelecao'>
            <section className='selecao'>
              <h3>importancia da adoção de animais </h3>
                <p className="selecao adocao">O Instituto Pet Brasil (2019) estima que existem cerca de 139,3 milhões de animais de estimação no Brasil, incluindo aproximadamente 54,2 milhões de cães e 23,9 milhões de gatos. Destes, cerca de 3,9 milhões estão em situação de vulnerabilidade, vivendo com famílias carentes ou nas ruas. Muitos desses animais estão sob os cuidados de ONGs que facilitam a adoção.</p>
                <div>
                  <h3>As condições necessárias para a adoção de um animal incluem:</h3>
                  <ul className='listaRequisitos'>
                    <li>Ter mais de 21 anos</li>
                    <li>Possuir espaço adequado para o novo membro da família</li>
                    <li>Garantir que o animal tenha uma vida boa e feliz</li>
                    <li>Participar de uma entrevista e preencher o Termo de Adoção Responsável</li>
                    <li>Estar ciente de que um animal pode viver mais de 15 anos</li>
                  </ul>
                </div>
              
            </section>
        </div>  
    )

}

export default SectionComponent
