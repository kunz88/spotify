
import useArtists from "../../hooks/useArtists"




import Card from "./Card/Card"
import CardListSection from "./CardListSection/CardListSection"



const SideList = () => {


    
    
    const token = localStorage.getItem("spotifyToken")

    const artistsPopular = ['eminem', 'taylor swift', 'radiohead', 'greenday', 'dualipa']
    const artistsRock = ['metallica', 'the cure', 'iron maiden', 'nirvana', 'pearljam']
    const artistsJazz = ['Louis Armstrong','Duke Ellington','Miles Davis','John Coltrane','Ella Fitzgerald' ];
    const podcasters = ['Joe Rogan','Tim Ferriss','Sam Harris','Gary Vaynerchuk','Brené Brown'];
    console.log("render sidelist")
    

    const { artists: popular, isLoading, hasError } = useArtists(artistsPopular,token)
    const { artists: rock } = useArtists(artistsRock,token)
    const { artists: jazz } = useArtists(artistsJazz,token)
    const { artists: podcast } = useArtists(podcasters,token)








    if (hasError) {
        return <h1>Error</h1>
    }
    if (!popular) {
        return <h1>Artists not found</h1>
    }
    if (isLoading) {
        return <div className="loading-lg h-screen min-w-full flex justify-center"><span className="loading loading-dots w-10"></span></div>
    }

    return (
        <>
            <section className="rounded-box">
                <CardListSection title="Artisti più popolari">

                    {popular.map((artist, index) => <Card key={index} id={artist.id} title={artist.name} subTitle={String(artist.popularity)} pictureUrl={artist.images[0].url} rounded="rounded" />)}
                </CardListSection>
            </section>
            <section className="rounded-box">
                <CardListSection title="Artisti più rock">

                    {rock.map((artist, index) => <Card id={artist.id} key={index} title={artist.name} subTitle={String(artist.popularity)} pictureUrl={artist.images[0].url} rounded="rounded-full" />)}
                </CardListSection>
            </section>
            <section className="rounded-box">
                <CardListSection title="Artisti jazz">

                    {jazz.map((artist, index) => <Card id={artist.id} key={index} title={artist.name} subTitle={String(artist.popularity)} pictureUrl={artist.images[0].url} rounded="rounded" />)}
                </CardListSection>
            </section>
            <section className="rounded-box">
                <CardListSection title="Podcast">

                    {podcast.map((artist, index) => <Card id={artist.id} key={index} title={artist.name} subTitle={String(artist.popularity)} pictureUrl={artist.images[0].url} rounded="rounded-full" />)}
                </CardListSection>
            </section>
        </>
    )
}

export default SideList