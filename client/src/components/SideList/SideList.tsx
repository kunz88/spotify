
import useArtists from "../../hooks/useArtists"




import Card from "./Card/Card"
import CardListSection from "./CardListSection/CardListSection"
import FakeListComponent from "./FakeListComponent/FakeListComponent"



const SideList = () => {


    
    
    const token = localStorage.getItem("spotifyToken")

    const artistsMock = ['eminem', 'taylor swift', 'radiohead', 'greenday', 'dualipa','metallica', 'the cure', 'iron maiden', 'nirvana', 'pearljam','Louis Armstrong','Duke Ellington','Miles Davis','John Coltrane','Ella Fitzgerald' ,'Joe Rogan','Tim Ferriss','Sam Harris','Gary Vaynerchuk','Brené Brown']

    console.log("render sidelist")
    

    const { artists, isLoading, hasError } = useArtists(artistsMock,token)
    
    if (!artists) {
        return <h1>Artists not found</h1>
    }
    
    const popular = artists.slice(0,5)
    const rock = artists.slice(5,10)
    const jazz = artists.slice(10,15)
    const podcast = artists.slice(15,20)








    if (hasError) {
        return <h1>Error</h1>
    }

    if (isLoading) {
        return <div className="loading-lg h-screen min-w-full flex justify-center"><span className="loading loading-dots w-10"></span></div>
    }

    return (
        <>
            <section className="rounded-box">
                <CardListSection title="Artisti più popolari">

                    {popular.map((artist, index) => <Card key={index} id={artist.id} title={artist.name} subTitle={artist.type} pictureUrl={artist.images[0].url} rounded="rounded" />)}
                </CardListSection>
            </section>
            <section className="rounded-box">
                <CardListSection title="Artisti più rock">

                    {rock.map((artist, index) => <Card id={artist.id} key={index} title={artist.name} subTitle={artist.type} pictureUrl={artist.images[0].url} rounded="rounded-full" />)}
                </CardListSection>
            </section>
            <section className="rounded-box">
                <CardListSection title="Artisti jazz">

                    {jazz.map((artist, index) => <Card id={artist.id} key={index} title={artist.name} subTitle={artist.type} pictureUrl={artist.images[0].url} rounded="rounded" />)}
                </CardListSection>
            </section>
            <section className="rounded-box">
                <CardListSection title="Podcast">

                    {podcast.map((artist, index) => <Card id={artist.id} key={index} title={artist.name} subTitle={artist.type} pictureUrl={artist.images[0].url} rounded="rounded-full" />)}
                </CardListSection>
            </section>
            <FakeListComponent/>
        </>
    )
}

export default SideList