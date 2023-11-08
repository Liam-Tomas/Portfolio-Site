import React from 'react';
import CodeBlock from './CodeEditorJSX'; // Adjust the import path as necessary

const MyComponent = () => {
  const codeString = ` // Brief Explanation
  const MyRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const currentUser = useContext(FirebaseAuthContext);
    const [loading, setLoading] = useState(false);
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  
    useEffect(() => {
      const fetchMyRecipes = async () => {
        setLoading(true); // Set loading to true when the fetch starts
        try {
          const response = await axios.get('{API_BASE_URL}/recipes/myrecipes?userUID={currentUser.uid}');
          if (response.data && response.data.recipes) {
            setRecipes(response.data.recipes);
          }
        } catch (error) {
          console.error('Error fetching my recipes: ', error);
        } finally {
          setLoading(false); // Set loading to false when the fetch completes
        }
      };
      fetchMyRecipes();
    }, [currentUser.uid]);
  
    const handleNewRecipe = async (newRecipe) => {
      try {
        const response = await axios.post('{API_BASE_URL}/recipes/myrecipes', {
          ...newRecipe,
          userUID: currentUser.uid,
        });
        setRecipes((prevRecipes) => [...prevRecipes, response.data.recipe]);
        setShowModal(false);
      } catch (error) {
        console.error(error);
      }
    };
  `;

  return (
    <div>
      <CodeBlock code={codeString} />
    </div>
  );
};

export default MyComponent;
