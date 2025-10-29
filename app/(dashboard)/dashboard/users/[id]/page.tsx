const UserDetails = async ({ params }: { params: { id: string } }) => {
    const {id} =  await params;


  return(
   <div>Showing UserDetails {id}</div>
  )
};

export default UserDetails;
