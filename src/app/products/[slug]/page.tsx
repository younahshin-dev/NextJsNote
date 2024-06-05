type Props = {
    params : {
        slug : string;
    }
};
export default function PantsPage({params}:Props) { 
    
return <h1>{params.slug} 제품 설명서</h1>;
}
