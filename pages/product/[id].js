export async function getServerSideProps({res}) {

	res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate')

	return {
	  props: {
		data: {
			dateStr: (new Date()).toISOString()
		}

	  },
	}
  }

  function Page({ data }) {
	// Render data...

	return (
		<section>
			{ JSON.stringify(data) }
		</section>
	)



  }



export default Page