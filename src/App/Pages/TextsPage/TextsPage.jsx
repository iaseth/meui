


export default function TextsPage () {
	const ONE_2_SIX = [1, 2, 3, 4, 5, 6];

	return (
		<article className="">
			<h4>H tags</h4>

			<main className="ch:py-4 ch2:py-3">
				<section>
					{ONE_2_SIX.map(n => {
						const Tag = `h${n}`;
						return (
							<Tag key={n}>This is an {Tag}</Tag>
						);
					})}
				</section>

				<section>
					{ONE_2_SIX.map(n => {
						const className = `h${n}`;
						return (
							<div key={n} className={className}><span>{className}</span> class</div>
						);
					})}
				</section>

				<section>
					{ONE_2_SIX.map(n => {
						const className = `H${n}`;
						return (
							<div key={n} className={className}><span>{className}</span> class</div>
						);
					})}
				</section>

				<section>
					{ONE_2_SIX.map(n => {
						const className = `p${n}`;
						return (
							<div key={n} className={className}>This is a div with <span>{className}</span> class.</div>
						);
					})}
				</section>
			</main>
		</article>
	);
}
