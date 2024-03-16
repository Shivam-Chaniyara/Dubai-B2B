import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div class="bg-blue-300 w-[100vw] flex justify-center items-center">
            <div class="mb-4 p-4">
                <div class="card flex ">
                    <div class="card-body">
                        <div class="">
                            <h1 class="text-4xl mb-3">Create Quotations</h1>
                            <nav class="inline-block">
                                <ol class="flex flex-row gap-5 mb-5">
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Back to Quotations List</a></li>
                                </ol>
                            </nav>

                        </div>
                        <form action="">
                            <div class=" flex flex-col border gap-5 justify-center items-center sm:flex-row mb-8">
                                <div class="flex flex-col justify-center items-center ">
                                    <label for="cname">Client Name</label>
                                    <input type="text" name="cname" />
                                </div>

                                <div class="flex flex-col justify-center items-center ">
                                    <label for="sdate">Start Date</label>
                                    <input type="date" name="sdate" />
                                </div>

                                <div class="flex flex-col justify-center items-center ">
                                    <label for="no_of_night">No. of Nights</label>
                                    <select name="no_of_night">
                                        <option value selected="select">Select</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </div>

                                <div class="flex flex-col justify-center items-center ">
                                    <label for="adult">Adult</label>
                                    <select name="adult">
                                        <option value selected="select">Select</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </div>

                                <div class="flex flex-col justify-center items-center ">
                                    <label for="no_of_children">No. of Children</label>
                                    <select name="no_of_children">
                                        <option value selected="select">Select</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </div>

                                <div class="flex flex-col justify-center items-center ">
                                    <label for="infant">Infants</label>
                                    <select name="infant">
                                        <option value selected="select">Select</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </div>
                            </div>

                            <ul class="flex gap-5 mb-7 border sm:justify-center">
                                <li><a href="">Hotel1</a></li>
                                <li><a href="">Hotel2</a></li>
                                <li><a href="">Hotel3</a></li>
                                <li><a href="">Hotel4</a></li>
                            </ul>

                            <div>
                                <div class="flex border justify-center items-center flex-col">
                                    <div id="Hotel1" class="flex justify-center items-center flex-col">
                                        <div class="">

                                            <div class="flex flex-col justify-center items-center ">
                                                <label for="cindate">Checkin Date</label>
                                                <input type="date" name="cindate" />
                                            </div>

                                            <div class="flex flex-col justify-center items-center ">
                                                <label for="coutdate">Checkout Date</label>
                                                <input type="date" name="coutdate" />
                                            </div>

                                            <div class="flex flex-col justify-center items-center ">
                                                <label for="shotel">Select Hotel</label>
                                                <select name="shotel" id="">
                                                    <option value selected="select Hotel">Select Hotel</option>
                                                </select>
                                            </div>

                                            <div class="flex flex-col justify-center items-center ">
                                                <label for="sroom">Select Room</label>
                                                <select name="sroom" id="">
                                                    <option value selected="select Room">Select Room</option>
                                                </select>
                                            </div>

                                            <div class="flex flex-col justify-center items-center ">
                                                <label for="no_of_room">No. of Room</label>
                                                <select name="no_of_room" class="w-full">
                                                    <option value selected="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>

                                            <div class="flex flex-col justify-center items-center ">
                                                <label for="aexbed">Adult Extra Bed</label>
                                                <select name="aexbed" id="" class="w-full">
                                                    <option value selected="0">0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>

                                            <div class="flex flex-col justify-center items-center ">
                                                <label for="cexbed">Child Extra Bed</label>
                                                <select name="cexbed" id="" class="w-full">
                                                    <option value selected="0">0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>



                            <input type="submit" name="submit" value="Create Quotation" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}