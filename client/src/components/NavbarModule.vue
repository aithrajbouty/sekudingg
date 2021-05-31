<template>
  <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
            <div class="container-fluid">
            <div>
            <b-dropdown id="dropdown-1" text="Sort" class="m-md-3">
                <b-dropdown-item>Ascending</b-dropdown-item>
                <b-dropdown-item>Descending</b-dropdown-item>
                <b-dropdown-item>Newest</b-dropdown-item>
                <b-dropdown-item>Oldest</b-dropdown-item>
            </b-dropdown>
            </div>

            <div>
            <b-dropdown id="dropdown-1" text="Filter" class="m-md-3">
                <b-dropdown-item active>Web Development</b-dropdown-item>
                <b-dropdown-item>Web Design</b-dropdown-item>
                <b-dropdown-item>Data Science</b-dropdown-item>
                <b-dropdown-item>Computer Science</b-dropdown-item>
                <b-dropdown-item>Mobile Development</b-dropdown-item>
            </b-dropdown>
            </div>


            <div>
            <b-navbar type="light" variant="light">
                <b-nav-form>
                <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>
            </b-navbar>
            </div>

        </div>
      </div>
  </nav>
</template>

<script>
export default {
    name : 'NavbarModule'
}
</script>

<style>

</style>