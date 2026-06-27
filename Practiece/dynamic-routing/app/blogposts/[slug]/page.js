export default async function Page({ params }) {
    throw new Error('error hai')
    const { slug } = await params;

    let languages = ['java','python','Mysql','cpp','ruby']
    if(languages.includes(slug)){
          return <div>My Post: {slug}</div>;
    }

    return <p>The  Post not found</p>
}
