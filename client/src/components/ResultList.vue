<template>
<div>

  <v-data-table
    :headers="headers"
    :items="parents"
    item-key="pid"
  >
    <template slot="items" slot-scope="props">
      <tr @click="props.expanded = !props.expanded">
        <td>{{ props.item.pid }}</td>
        <td class="text-xs-left">{{ props.item.Name }}</td>
        <td class="text-xs-left">{{ props.item.Gender }}</td>
        <td class="text-xs-left">{{ props.item.Telephone }}</td>
        <td class="text-xs-left">{{ props.item.Email }}</td>
        <td class="text-xs-left">{{ props.item.Address }}</td>
      </tr>
    </template>
    <template slot="expand" slot-scope="props">
      <v-card flat>
        <v-card-text>
          <v-btn>Edit</v-btn>
          <v-btn v-on:click="deleting">Delete</v-btn>
        </v-card-text>
      </v-card>
    </template>
  </v-data-table>
</div>  
</template>

<script>
import ParentService from '@/services/ParentService'

export default {
  data () {
    return {
      parents: [
        {}
      ],
      headers: [
          {
            text: 'Parent ID',
            align: 'left',
            sortable: false,
            value: 'pid'
          },
          { text: 'Name', value: 'Name' },
          { text: 'Gender', value: 'Gender' },
          { text: 'Telephone', value: 'Telephone' },
          { text: 'Email', value: 'Email' },
          { text: 'Address', value: 'Address' }
        ]
    }
  },
  async mounted() {
    var x = await ParentService.index()
    this.parents = x.data 
  },
  methods: {
    deleting: function () {
      // eslint-disable-next-line
      console.log(this)
      console.log('Delete data id of : ',this.pid)
      //delete Parent
      /*
      ParentService.deleteParent(this.pid).then((res) => {
        if(res.data == 'Error') {
          //do something to handle error
          alert('Error trying to delete parent info.')
        }
      })
  */
    }

  }
}
</script>


