const Applications = () =>{
    return(
        <section className="applicationTable">
            <h2>Job Applications</h2>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>company</th>
                        <th>position</th>
                        <th>date applied</th>
                        <th>status</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Loblaw Digital</td>
                        <td>Front end developer</td>
                        <td>6/6'23</td>
                        <td>applied</td>
                        <td>open application</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default Applications;