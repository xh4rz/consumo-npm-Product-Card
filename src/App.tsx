import './App.css';
import {
	ProductCard,
	ProductImage,
	ProductTitle,
	ProductButtons
} from 'hg-product-card';

const product = {
	id: '1',
	title: 'Coffee Mug - Card',
	img: './coffee-mug.png'
};

function App() {
	return (
		<div className="App App-header">
			<ProductCard
				product={product}
				initialValues={{
					count: 4,
					maxCount: 10
				}}
			>
				{({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
					<>
						<ProductImage />
						<ProductTitle />
						<ProductButtons />
					</>
				)}
			</ProductCard>
		</div>
	);
}

export default App;
