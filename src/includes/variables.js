const appName ='Social Media App';
// export default 'Social Media App far';// we can export default like this because anyway we have only one export 
                //and the name for import can be different from export
// export const postStatus = ['Draft','Publish'    ,'Archive'];
// export const postCategories= ['Education', 'Entertainment',
// 'Gaming','News','Other'];


export default appName;
// export {postStatus,postCategories};

//this comment is available as comment in index.js to do it /**+enter
/** 
 * list of available categories
*/

export const categories = [
    { id: "edu", text: "Education 22" },
    { id: "ent", text: "Entertainment" },
    { id: "gam", text: "Gaming" },
    { id: "new", text: "News" },
    { id: "oth", text: "Other" },
    ];


/**
 * get a category based on its id
 * @param {string} id 
 * the id of the to retrieve
 * @returns 
 * it returns a category text
 */
export const getCategory =(id)=>{
        const item = categories.find(// how to find one item in the array we give it the id to find
            (category) => category.id ===id
        );
        return item?.text || 'None'; // get text otherwise right none
    };

/**
 * list of available categories
 * @param {*} id 
 * @returns 
 */
export const getStatus=(id)=>{
    const item=statuses.find(
        (status)=> status.id ===id
    );
    return item?.text || 'None'
}
    
  export const statuses =[
    {id :'d', text :'Draft'},
    {id:'P', text:'Published'},
    {id:'a', text:'archived'}
  ];
