
import useArtists from "../../hooks/useArtists"
import Card from "../Card/Card"
import CardListSection from "../CardListSection/CardListSection"



const SideList = () => {
    const artistsNames = ['eminem', 'taylor swift', 'radiohead', 'metallica', 'madonna']

    const token = String(localStorage.getItem("spotifyToken"))
    console.log("render")
    console.log(token)
    const { artists, isLoading, hasError } = useArtists(artistsNames, token)




    if (hasError) {
        return <h1>Error</h1>
    }
    if (!artists) {
        return <h1>Artists not found</h1>
    }

    return (


        isLoading ?
            <h1>Loading...</h1> :

            <>
                <section className="rounded-box">
                    <CardListSection title="Artisti più popolari">

                        {artists.map((artist, index) => <Card key={index} title={artist.name} subTitle={String(artist.popularity)} pictureUrl={artist.images[0].url} rounded="rounded" />)}
                    </CardListSection>
                </section>
                <section className="rounded-box">
                    <CardListSection title="Artisti più popolari">

                        {artists.map((artist, index) => <Card key={index} title={artist.name} subTitle={String(artist.popularity)} pictureUrl={artist.images[0].url} rounded="rounded-full" />)}
                    </CardListSection>
                </section>
                <section className="rounded-box">
                    <CardListSection title="Artisti più popolari">

                        {artists.map((artist, index) => <Card key={index} title={artist.name} subTitle={String(artist.popularity)} pictureUrl={artist.images[0].url} rounded="rounded" />)}
                    </CardListSection>
                </section>
            </>
    )
}

export default SideList