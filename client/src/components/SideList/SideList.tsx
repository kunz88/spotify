
import useArtists from "../../hooks/useArtists"
import useFetch from "../../hooks/useFetch"
import Card from "./Card/Card"
import CardListSection from "./CardListSection/CardListSection"



const SideList = () => {
    const artistsNames = ['eminem', 'taylor swift', 'radiohead', 'metallica', 'madonna']

    const token = String(localStorage.getItem("spotifyToken"))
    const { artists, isLoading, hasError } = useArtists(artistsNames, token)

    const ids = artists.map((item) => item.id)
    const {isFetching,data,error} = useFetch(`https://api.spotify.com/v1/artists/${ids[0]}/top-tracks`,token)
    console.log(data,isFetching,error) 







    if (hasError) {
        return <h1>Error</h1>
    }
    if (!artists) {
        return <h1>Artists not found</h1>
    }
    if (isLoading) {
        return <div className="loading-lg h-screen min-w-full flex justify-center"><span className="loading loading-dots w-10"></span></div>
    }

    return (
        <>
            <section className="rounded-box">
                <CardListSection title="Artisti più popolari">

                    {artists.map((artist, index) => <Card key={index} id={artist.id} title={artist.name} subTitle={String(artist.popularity)} pictureUrl={artist.images[0].url} rounded="rounded" />)}
                </CardListSection>
            </section>
            <section className="rounded-box">
                <CardListSection title="Artisti più popolari">

                    {artists.map((artist, index) => <Card id={artist.id} key={index} title={artist.name} subTitle={String(artist.popularity)} pictureUrl={artist.images[0].url} rounded="rounded-full" />)}
                </CardListSection>
            </section>
            <section className="rounded-box">
                <CardListSection title="Artisti più popolari">

                    {artists.map((artist, index) => <Card id={artist.id} key={index} title={artist.name} subTitle={String(artist.popularity)} pictureUrl={artist.images[0].url} rounded="rounded" />)}
                </CardListSection>
            </section>
        </>
    )
}

export default SideList