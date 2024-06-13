
 export default function AddDog() {

    function createDog(formData: FormData) {

    const addDogFormData = {
    dogName: formData.get('dogName'),
    breed: formData.get('breed'),
    age: formData.get('age'),
    notes: formData.get('notes')
    }

    console.log(addDogFormData);
    console.log('Dog added');

}
    return (
        
    <form action={createDog}>
        <div className='flex flex-col max-w-xl ml-96'>
        <label htmlFor='dogName'>Dog Name:</label>
        <input type='text' id='dogName' name='dogName' className='text-black'/>
        <label htmlFor='breed'>Breed:</label>
        <input type='text' id='breed' name='breed' className='text-black'/>
        <label htmlFor='age'>Age:</label>
        <input type='number' id='age' name='age' className='text-black'/>
        <label htmlFor='notes'>Notes:</label>
        <input type='text' id='notes' name='notes' className='text-black'/>
        <button type='submit'>Save</button>
        </div>
    </form>
    
    );
}
 
