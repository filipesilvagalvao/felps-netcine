"use client"
import { useRef } from "react"
import Card__carousel from "../card__carousel/Card__carousel"
import styles from "./Carousel.module.css"

function Carousel() {
    const refCarousel = useRef<HTMLDivElement | null>(null)

    const scrollRight = () => {
        refCarousel.current?.scrollBy({
            left: refCarousel.current.clientWidth,
            behavior: "smooth",
        })
    }

    const scrollLeft = () => {
        refCarousel.current?.scrollBy({
            left: -refCarousel.current.clientWidth,
            behavior: "smooth",
        })
    }


    return (
        <section className={styles.carousel}>
            <div className={styles.carousel__container} ref={refCarousel}>
                <Card__carousel
                    cover="https://image.tmdb.org/t/p/w1280/iN41Ccw4DctL8npfmYg1j5Tr1eb.jpg"
                    name="Avatar: Fogo e Cinzas"
                    average={7.4}
                    genders={["Ficção científica", "Aventura", "Fantasia"]}
                    year={2025}
                    overview="Após a devastadora guerra contra a RDA e a perda de seu filho mais velho, Jake Sully e Neytiri enfrentam uma nova ameaça em Pandora: o Povo das Cinzas, uma tribo Na'vi violenta e sedenta por poder, liderada pelo implacável Varang. A família de Jake deve lutar por sua sobrevivência e pelo futuro de Pandora em um conflito que os leva aos seus limites emocionais e físicos."
                    link="/filmes/83533/avatar-fogo-e-cinza"
                />

                <Card__carousel
                    cover="https://image.tmdb.org/t/p/w1280/hoN7SfYiUlEh2bWJIJFvMjOAKQZ.jpg"
                    name="Stranger Things"
                    average={8.6}
                    genders={["Sci-Fi & Fantasy", "Mistério", "Action & Adventure"]}
                    year={2016}
                    overview="Quando um garoto desaparece, a cidade toda participa nas buscas. Mas o que encontram são segredos, forças sobrenaturais e uma menina."
                    link="/series/66732/stranger-things"
                />


                <Card__carousel
                    cover="https://image.tmdb.org/t/p/w1280/7nfpkR9XsQ1lBNCXSSHxGV7Dkxe.jpg"
                    name="Zootopia 2"
                    average={7.6}
                    genders={["Animação", "Comédia", "Aventura", "Família", "Mistério"]}
                    year={2025}
                    overview="Os detetives Judy Hopps e Nick Wilde se encontram na trilha sinuosa de um réptil misterioso que chega a Zootopia e vira a metrópole dos mamíferos de cabeça para baixo."
                    link="/filmes/1084242/zootopia-2"
                />

                <Card__carousel
                    cover="https://image.tmdb.org/t/p/w1280/54BOXpX2ieTXMDzHymdDMnUIzYG.jpg"
                    name="Five Nights at Freddy's 2"
                    average={6.8}
                    genders={["Terror", "Suspense"]}
                    year={2025}
                    overview="Um ano após o pesadelo sobrenatural na Freddy Fazbear's Pizza, as histórias sobre o que aconteceu ali foram distorcidas, transformando-se em uma lenda local exagerada, inspirando o primeiro Fazfest da cidade. Sem saber a verdade sobre o ocorrido, Abby sai escondida para se reconectar com Freddy, Bonnie, Chica e Foxy, dando início a uma aterrorizante série de eventos que revelarão segredos sombrios sobre a verdadeira origem da Freddy's e libertarão um horror há muito esquecido, escondido por décadas."
                    link="/filmes/1228246/five-nights-at-freddys-2"
                />

                <Card__carousel
                    cover="https://image.tmdb.org/t/p/w1280/fepnF3W4VP3s8ui8nDtrlsFVYwO.jpg"
                    name="A Velha Com a Faca"
                    average={6.4}
                    genders={["Ação", "Mistério", "Drama"]}
                    year={2025}
                    overview="A assassina envelhecida Hornclaw viu tudo, mas ela nunca esperava orientar um novato imprudente como Bullfight. À medida que seu vínculo improvável se aprofunda, rachaduras se formam no submundo em que eles navegam juntos. Quando Hornclaw descobre que alguém a quer morta, ela é empurrada para um jogo mortal de engano. Com os inimigos se aproximando e confiando na falta de oferta, sobreviver significa permanecer afiada - tanto a lâmina quanto a mente."
                    link="/filmes/1247002/a-velha-com-a-faca"
                />

                <Card__carousel
                    cover="https://image.tmdb.org/t/p/w1280/dHSz0tSFuO2CsXJ1CApSauP9Ncl.jpg"
                    name="Truque de Mestre: O 3° Ato"
                    average={6.5}
                    genders={["Suspense", "Crime", "Mistério"]}
                    year={2025}
                    overview="Os Quatro Cavaleiros estão de volta com uma nova geração de ilusionistas e uma trama cheia de reviravoltas, mágicas e surpresas, em um truque que envolve a joia mais valiosa do mundo."
                    link="/filmes/425274/truque-de-mestre-o-3-ato"
                />

                <Card__carousel
                    cover="https://image.tmdb.org/t/p/w1280/yCatt8lmp3oRFEcOZF8KHhsiASQ.jpg"
                    name="SISU: Estrada da Vingança"
                    average={7.5}
                    genders={["Ação", "Guerra"]}
                    year={2025}
                    overview="Um explosivo evento de ação sequência de SISU. Um sobrevivente de guerra retorna à casa onde sua família foi brutalmente assassinada. Ele a desmonta, carrega em um caminhão e decide reconstruí-la em um local seguro em sua homenagem. Quando o comandante do Exército Vermelho que matou sua família retorna determinado a terminar o trabalho, uma perseguição implacável e de tirar o fôlego acontece."
                    link="/filmes/1223601/sisu-estrada-da-vinganca"
                />

                <Card__carousel
                    cover="https://image.tmdb.org/t/p/w1280/l8pwO23MCvqYumzozpxynCNfck1.jpg"
                    name="Wicked: Parte II"
                    average={6.7}
                    genders={["Fantasia", "Aventura", "Romance"]}
                    year={2025}
                    overview="Elphaba, agora demonizada como a Bruxa Má do Oeste, vive no exílio, escondida na floresta de Oz, e tenta desesperadamente expor a verdade que conhece sobre o Mágico. Enquanto isso, Glinda se tornou o glamouroso símbolo da bondade para todo o reino de Oz e desfruta das vantagens da fama e da popularidade. Quando uma multidão enfurecida se ergue contra a Bruxa Má, Glinda e Elphaba vão precisar se unir uma última vez."
                    link="/filmes/967941/wicked-parte-2"
                />

                <Card__carousel
                    cover="https://image.tmdb.org/t/p/w1280/4BtL2vvEufDXDP4u6xQjjQ1Y2aT.jpg"
                    name="A Sombra Do Perigo"
                    average={6.6}
                    genders={["Ação", "Crime", "Suspense"]}
                    year={2025}
                    overview="Elphaba, agora demonizada como a Bruxa Má do Oeste, vive no exílio, escondida na floresta de Oz, e tenta desesperadamente expor a verdade que conhece sobre o Mágico. Enquanto isso, Glinda se tornou o glamouroso símbolo da bondade para todo o reino de Oz e desfruta das vantagens da fama e da popularidade. Quando uma multidão enfurecida se ergue contra a Bruxa Má, Glinda e Elphaba vão precisar se unir uma última vez."
                    link="/filmes/1419406/a-sombra-do-perigo"
                />
            </div>

            <button
                className={`${styles.carousel__btnSlider} ${styles.btn__left}`}
                onClick={scrollLeft}
            >
                <i className="fa-solid fa-circle-chevron-left"></i>
            </button>

            <button
                className={`${styles.carousel__btnSlider} ${styles.btn__right}`}
                onClick={scrollRight}
            >
                <i className="fa-solid fa-circle-chevron-right"></i>
            </button>

        </section>
    )
}

export default Carousel