<script lang="ts" setup>

</script>

<template>
    <div  className="h-screen bg-base-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">

        <div className="flex items-center justify-center md:justify-end m-5">
            <img src="../assets/sunny.png" alt="weather" className="h-40 w-40" />
        </div>
        <div className="flex items-center justify-center md:justify-start">

          <div className="flex flex-col">
             <h1 className="text-9xl text-black">15° C</h1> 
               <h1 className="text-5xl text-black">Miazaki,Japan</h1> 
               <h1 className="text-3xl text-black">Clear</h1> 
               <div className="flex">
                <img className="w-8" src="../assets/humidity.png" alt="">
                <p class="text-2xl mx-5"> 26%</p>
              </div>
          </div>
          
        
            
          
        </div>

    </div>
     

      
</template>
