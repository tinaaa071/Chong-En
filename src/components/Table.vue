<template>
  <table class="min-w-full divide-y divide-gray-300">
        <thead class="bg-gray-50">
            <tr>
                <th
                v-for="column in columns"
                :key="column.key"
                class="px-5 py-3 text-sm font-medium tracking-wider text-left text-gray-400 whitespace-nowrap"
                >
                {{ column.label }}
                </th>
            </tr>
        </thead>
        
        <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="button in lists" :key="button.id">
                <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">{{ title }}</td>
                <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">{{ button }}</td>
                <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{{ button }}</td>
                <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{{ button }}</td>
                <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{{ button }}</td>
                <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{{ button }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
props: {
    button: Boolean,
},
}
</script>