


function PageLink ({page, current, onClick}) {
	return (
		<li className={`px-4 py-4 border-l-4 border-y-2 border-transparent ${current ? "bg-white border-y-blue-500 border-l-blue-500" : "cursor-pointer hover:bg-zinc-100"}`} onClick={onClick}>{page.title}</li>
	);
}

export default function Sidebar ({pageIndex, setPageIndex, PAGES}) {
	return (
		<aside className="max-w-xs grow bg-zinc-100 font-bold border-r-2 border-blue-500">
			<header className="px-4 py-8 text-center">
				<h4>MeUI</h4>
			</header>
			<ul className="sticky top-0">
				{PAGES.map((page, k) => <PageLink key={k}
					current={pageIndex === k}
					onClick={() => setPageIndex(k)}
					{...{page}} />)}
			</ul>
		</aside>
	);
}
